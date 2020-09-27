import traceback
from datetime import datetime, timedelta

import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidSignatureError
from sentry_sdk import capture_message


def jwt_refresh(
    authorization, token_refresh_seconds, token_expiration_seconds, jwt_secret
):
    try:
        token = authorization.split(" ")[1]
        decoding = jwt.decode(token, jwt_secret, algorithms="HS256")
        if datetime.utcnow() > (
            datetime.utcfromtimestamp(decoding["exp"])
            - timedelta(seconds=token_refresh_seconds)
        ):
            return new_jwt(
                decoding["user_id"],
                decoding["user_email"],
                token_expiration_seconds,
                jwt_secret,
            )
    except ExpiredSignatureError:
        pass
    except InvalidSignatureError:
        pass
    except Exception:
        capture_message(traceback.format_exc())
    return None


def refresh_verify(refresh_cookie, jwt_secret):
    try:
        decoding = jwt.decode(refresh_cookie, jwt_secret, algorithms="HS256")
        return (decoding["user_id"], decoding["user_email"], None)
    except ExpiredSignatureError as e:
        return (None, None, e)
    except InvalidSignatureError as e:
        capture_message(traceback.format_exc())
        return (None, None, e)
    except Exception:
        capture_message(traceback.format_exc())
    return (None, None, None)


def new_refresh(user_id, user_email, refresh_expiration_seconds, jwt_secret):
    return jwt.encode(
        {
            "user_id": user_id,
            "user_email": user_email,
            "exp": datetime.utcnow() + timedelta(seconds=refresh_expiration_seconds),
        },
        jwt_secret,
        algorithm="HS256",
    ).decode("utf-8")


def jwt_verify(authorization, jwt_secret):
    try:
        token = authorization.split(" ")[1]
        decoding = jwt.decode(token, jwt_secret, algorithms="HS256")
        return (decoding["user_id"], decoding["user_email"], decoding["role"], None)
    except ExpiredSignatureError as e:
        return (None, None, None, e)
    except InvalidSignatureError as e:
        capture_message(traceback.format_exc())
        return (None, None, None, e)
    except Exception:
        capture_message(traceback.format_exc())
    return (None, None, None, None)


def new_jwt(user_id, user_email, token_expiration_seconds, jwt_secret):
    role = "none"

    if user_email in []:
        role = "researcher"

    if user_email in []:
        role = "team"

    if user_email in []:
        role = "admin"

    return jwt.encode(
        {
            "user_id": user_id,
            "user_email": user_email,
            "role": role,
            "exp": datetime.utcnow() + timedelta(seconds=token_expiration_seconds),
        },
        jwt_secret,
        algorithm="HS256",
    ).decode("utf-8")
