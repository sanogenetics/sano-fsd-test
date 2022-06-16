# comment to describe field must be specified on a field line
# comment must include what null means if it's set allowable
# when models/fields are added or removed
#   1) the schema must be updated: https://app.sqldbm.com/MySQL/Edit/p38897
#   2) the admin dashboard must be updated to continue to function

import logging
import os
import re
from datetime import datetime as dt
from playhouse.sqlite_ext import SqliteExtDatabase, JSONField

import pytz
import shortuuid
from peewee import (
    BooleanField,
    CharField,
    DateField,
    DateTimeField,
    FloatField,
    ForeignKeyField,
    IntegerField,
    Model,
    TextField
)

from core.config import config

logger = logging.getLogger(__name__)
logger.info("Creating a new database connection")

db = SqliteExtDatabase(
    database="sano.db",
    pragmas=(("foreign_keys", 1),),  # Enforce foreign-key constraints.
)

tz = pytz.timezone("Europe/London")


def convert(name):
    s1 = re.sub("(.)([A-Z][a-z]+)", r"\1_\2", name)
    return re.sub("([a-z0-9])([A-Z])", r"\1_\2", s1).lower()


def make_table_name(model_class):
    model_name = model_class.__name__
    table_name = convert(model_name)
    return table_name


# fmt: off
class BaseModel(Model):
    id = CharField(primary_key=True, default=lambda: shortuuid.uuid())
    created_at = DateTimeField(default=lambda: dt.now(tz))
    updated_at = DateTimeField(default=lambda: dt.now(tz))

    def save(self, *args, **kwargs):
        self.updated_at = dt.now(tz)
        return super(BaseModel, self).save(*args, **kwargs)

    class Meta:
        database = db
        table_function = make_table_name


class Users(BaseModel):
    email = CharField(255, unique=True)
    name = CharField(255, null=True)
    password_hash = CharField(255, null=True)
    email_validated = BooleanField(default=False)
    validation_token_hash = CharField(255, null=True)
    validation_token_expiry = DateTimeField(null=True)
    reset_token_hash = CharField(255, null=True)
    reset_token_expiry = DateTimeField(null=True)
    registration_source = CharField(255, null=True)


class Studies(BaseModel):
    key = CharField(255, null=True, unique=True)  # TBD this key should never be null, or should it?
    title = CharField(255, default="")  # TBD when would we have a blank title?
    short_title = CharField(30, default="")  # TBD when would we have a blank short title?
    visible = BooleanField(default=False)
    description = CharField(1500, null=True)  # TBD what does null mean?
    researcher_email = CharField(100, default="")  # TBD shouldn't this be null instead of default "" if there is no researcher email specified? (will change this anyway)


def create_tables():
    with db:
        db.create_tables([Users, Studies], safe=True)

create_tables()