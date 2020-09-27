import logging
from functools import wraps

from flask import jsonify, request
from jwt.exceptions import InvalidSignatureError

from core.auth.jwt import jwt_verify, refresh_verify
from core.config import config
from core.models import Users

jwt_secret = config["jwt_secret"]
logger = logging.getLogger(__name__)


def user_only(f):
    @wraps(f)
    def _verify(*args, **kwargs):
        authorization = request.headers.get("Authorization", "")
        if not authorization:
            return (
                jsonify({"error": "No token sent for endpoint requiring authentication"}),
                401,
            )
        user_id, user_email, role, error = jwt_verify(authorization, jwt_secret)

        if type(error) == InvalidSignatureError:
            logger.info("JWT Invalid")
            return jsonify({"error": "Invalid Signature"}), 401
        if user_id:
            return f(user_id, user_email, *args, **kwargs)
        else:
            return jsonify({"error": "Session Expired. Please log in again"}), 401

    return _verify


# def refresh_only(f):
#     @wraps(f)
#     def _verify(*args, **kwargs):
#         refresh_cookie = request.cookies.get("refresh")
#         if not refresh_cookie:
#             return (
#                 jsonify("No refresh cookie sent to refresh endpoint"),
#                 202,
#             )

#         if refresh_cookie == "logged out":
#             return jsonify("Logged out"), 202

#         user_id, user_email, error = refresh_verify(refresh_cookie, jwt_secret)

#         if type(error) == InvalidSignatureError:
#             logger.info("JWT Invalid")
#             return jsonify({"error": "Invalid Signature on Refresh Cookie"}), 401
#         if user_id:
#             return f(user_id, user_email, refresh_cookie, *args, **kwargs)
#         else:
#             return (
#                 jsonify("Refresh token expired"),
#                 202,
#             )

#     return _verify
