import logging
from datetime import datetime as dt

import bcrypt
import pytz
from flask import Blueprint
from flask import current_app as app
from flask import jsonify, request
from peewee import IntegrityError
from postmarker.exceptions import ClientError
from werkzeug.security import check_password_hash

from core.auth.decorators import user_only
from core.auth.jwt import new_jwt, new_refresh
from core.auth.store import auth_store
from core.email.registration import (
    send_already_registered_email,
    send_no_account_email,
    send_reset_email,
    send_validation_email,
)

auth_api = Blueprint("auth_api", __name__)
logger = logging.getLogger(__name__)

tz = pytz.timezone("Europe/London")


@auth_api.route("/x/register", methods=["POST"])
def register():
    email = request.json["email"]
    user, added, validation_token = auth_store.add_user(email)
    if added:
        logger.info(f"Added new user: {email}")
        send_validation_email(user.email, validation_token)
    else:
        if user.password_hash:
            logger.info("Failed to add existing user - password set: {email}")
            send_already_registered_email(email)
        else:
            try:
                logger.info("Failed to add existing user - password not set: {email}")
                send_validation_email(user.email, validation_token)
            except ClientError:
                return jsonify({"error": "Invalid email address detected"}), 400
    return jsonify("Registration successful"), 201


@auth_api.route("/x/register/<token>", methods=["POST"])
def check_registration(token):
    user = auth_store.get_user_by_validation_token(token)
    if user and user.validation_token_expiry > dt.now(tz):
        already_validated = user.email_validated
        user.email_validated = True
        user.save()
        if user.password_hash:
            return jsonify({"state": "DONE"}), 201
        else:
            if already_validated:
                return jsonify({"email": user.email, "state": "ALREADY_VALIDATED"}), 201
            else:
                return (
                    jsonify({"email": user.email, "state": "VALIDATED"}),
                    201,
                )
    else:
        return jsonify({"state": "INVALID"}), 200


@auth_api.route("/x/register/complete", methods=["POST"])
def complete_registration():
    password = request.json["password"]
    validation_token = request.json["token"]
    user = auth_store.complete_registration(validation_token, password)
    if user:
        token = new_jwt(
            str(user.id),
            user.email,
            app.config["token_expiration_seconds"],
            app.config["jwt_secret"],
        )
        user.validation_token_hash = None
        user.validation_token_expiry = None
        user.save()

        response = jsonify("Registration complete")
        return response, 201, {"token": token}
    else:
        return jsonify({"error": "No user with validation token"}), 400


def check_new_hash(password, password_hash):
    try:
        return bcrypt.checkpw(password, password_hash)
    except:
        return False


@auth_api.route("/x/logout", methods=["GET"])
def logout():
    response = jsonify("Successfully logged out")
    return response


@auth_api.route("/x/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    user = auth_store.get_user_by_email(email)
    if user and user.password_hash:
        if check_new_hash(password.encode("utf8"), user.password_hash.encode("utf8")):
            token = new_jwt(
                str(user.id),
                user.email,
                app.config["token_expiration_seconds"],
                app.config["jwt_secret"],
            )
            logger.info(f"Logging in {user.id}")
            return ({}, 200, {"token": token})
    return jsonify({"error": "Invalid email or password"}), 400


@auth_api.route("/x/refresh", methods=["GET"])
@user_only
def refresh(user_id, user_email):
    return jsonify({}), 200


@auth_api.route("/x/reset", methods=["POST"])
def reset():
    email = request.json["email"]
    platform = request.user_agent.platform
    browser = request.user_agent.browser
    user, reset_token = auth_store.set_reset_token(email)
    if not user:
        send_no_account_email(email)
    else:
        logger.info(f"Password reset request for {user.id}")
        send_reset_email(user.email, reset_token, platform, browser)
    return jsonify("Sent password reset email."), 201


@auth_api.route("/x/reset/<token>", methods=["POST"])
def check_reset(token):
    user = auth_store.get_user_by_reset_token(token)
    if user and dt.now(tz) < user.reset_token_expiry:
        user.email_validated = True
        user.save()
        logger.info(f"Password reset valid for {user.id}")
        return jsonify({"email": user.email, "state": "TODO"}), 201
    else:
        logger.info(f"Password reset invalid")
        return jsonify({"state": "INVALID"}), 200


@auth_api.route("/x/reset/complete", methods=["POST"])
def complete_reset():
    password = request.json["password"]
    reset_token = request.json["token"]
    user = auth_store.complete_reset(reset_token, password)
    if user:
        token = new_jwt(
            str(user.id),
            user.email,
            app.config["token_expiration_seconds"],
            app.config["jwt_secret"],
        )
        user.reset_token_hash = None
        user.reset_token_expiry = None
        user.save()
        logger.info(f"Password reset successful for {user.id}")

        response = jsonify("Password successfully reset")
        return response, 201, {"token": token}
    else:
        return jsonify({"error": "No user with reset token"}), 400
