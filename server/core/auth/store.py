import logging
import traceback
from datetime import datetime, timedelta
from secrets import token_urlsafe

import bcrypt
import pytz
from flask import current_app as app

from core.config import config
from core.models import Users

jwt_secret = config["jwt_secret"]
secret_salt = config["secret_salt"].encode("utf-8")
validation_token_duration_in_seconds = config["validation_token_duration_in_seconds"]
reset_token_duration_in_seconds = config["reset_token_duration_in_seconds"]
token_expiration_seconds = config["token_expiration_seconds"]
jwt_secret = config["jwt_secret"]

tz = pytz.timezone("Europe/London")
logger = logging.getLogger(__name__)


def get_one(query):
    if query:
        if len(query) > 1:
            logger.info("get_one found more than one object!")
        return query[0]
    else:
        return None


class AuthStore(object):

    # USER
    def add_user(self, email):
        validation_token = token_urlsafe(32)
        # uses the jwt_secret as a salt because can't search in DB otherwise
        validation_token_hash = bcrypt.hashpw(
            validation_token.encode("utf8"), secret_salt
        )
        validation_token_expiry = datetime.now(tz) + timedelta(
            seconds=validation_token_duration_in_seconds
        )
        query = Users.select().where(Users.email == email)
        if query:
            user = query[0]
            user.validation_token_hash = validation_token_hash
            user.validation_token_expiry = validation_token_expiry
            user.save()
            added = False
        else:
            user = Users.create(
                email=email,
                validation_token_hash=validation_token_hash,
                validation_token_expiry=validation_token_expiry,
            )
            added = True

        return (user, added, validation_token)

    def get_user_by_id(self, user_id):
        return get_one(Users.select().where(Users.id == user_id))

    def get_user_by_email(self, user_email):
        return get_one(Users.select().where(Users.email == user_email))

    def get_user_by_validation_token(self, validation_token):
        try:
            validation_token_hash = bcrypt.hashpw(
                validation_token.encode("utf8"), secret_salt
            )
        except Exception:
            return None

        return get_one(
            Users.select().where(Users.validation_token_hash == validation_token_hash)
        )

    def set_reset_token(self, email):
        reset_token = token_urlsafe(32)
        reset_token_hash = bcrypt.hashpw(reset_token.encode("utf8"), secret_salt)
        reset_token_expiry = datetime.now(tz) + timedelta(
            seconds=reset_token_duration_in_seconds
        )
        query = Users.select().where(Users.email == email)
        if query:
            user = query[0]
            user.reset_token_hash = reset_token_hash
            user.reset_token_expiry = reset_token_expiry
            user.save()
            return (user, reset_token)
        else:
            return (None, reset_token)

    def get_user_by_reset_token(self, reset_token):
        reset_token_hash = bcrypt.hashpw(reset_token.encode("utf8"), secret_salt)
        return get_one(Users.select().where(Users.reset_token_hash == reset_token_hash))

    def complete_reset(self, reset_token, password):
        reset_token_hash = bcrypt.hashpw(reset_token.encode("utf8"), secret_salt)
        query = Users.select().where(Users.reset_token_hash == reset_token_hash)
        if query:
            user = query[0]
            user.password_hash = bcrypt.hashpw(password.encode("utf8"), bcrypt.gensalt())
            user.save()
            return user

    def complete_registration(self, validation_token, password):
        validation_token_hash = bcrypt.hashpw(
            validation_token.encode("utf8"), secret_salt
        )
        user = get_one(
            Users.select().where(Users.validation_token_hash == validation_token_hash)
        )
        if user and not user.password_hash:
            user.password_hash = bcrypt.hashpw(password.encode("utf8"), bcrypt.gensalt())
            user.save()
            return user
        return None


auth_store = AuthStore()
