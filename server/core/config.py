import json
import logging
import os

import boto3

config = {
    # SHARED CONFIG
    "token_expiration_seconds": 5 * 60,  # 5 minutes
    "refresh_expiration_seconds": 2 * 60 * 60,  # 2 hours
    "reset_token_duration_in_seconds": 10 * 60,  # 10 minutes
    "validation_token_duration_in_seconds": 86400,  # 1 day
}
with open("local-config.json") as f:
    config.update(json.load(f))
