import json
import logging
import os
from datetime import date, datetime

from flask import Flask, jsonify, request
from flask.json import JSONEncoder
from flask_cors import CORS

from core.auth.jwt import jwt_refresh
from core.config import config

# from core.models import *
from core.rest.auth import auth_api
from core.rest.public import public_api
from core.rest.user import user_api


class CustomJSONEncoder(JSONEncoder):
    """Fixes the jsonifying of the datetimes."""

    def default(self, obj):
        try:
            if isinstance(obj, date):
                return obj.isoformat()
            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.config.update(config)
app.json_encoder = CustomJSONEncoder

CORS(app, supports_credentials=True)


app.register_blueprint(auth_api)


@app.after_request
def refresh_authorization(response):
    if "Invalidate-JWT" in response.headers:
        return response
    response.headers["Access-Control-Expose-Headers"] = "token"
    # check to see if jwt needs a refresh
    authorization = request.headers.get("Authorization", "")
    if authorization:
        token = jwt_refresh(authorization, 5 * 60, 2 * 60 * 60, app.config["jwt_secret"],)
        if token:
            response.headers["token"] = token
    return response


@app.route("/")
def hello():
    return "Hello"


if __name__ == "__main__":
    app.run()
