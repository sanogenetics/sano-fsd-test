from flask import current_app as app
from flask import render_template

from core.email.base import send_email, txt_footer


def send_already_registered_email(address):
    base_url = app.config["base_url"]
    subject = "Looks like you've already created an account"
    txt = f"""Hello
Thank your for trying to register with Sano Genetics again!
However, it looks like you've already created an account with us.
If you remember your password, please log in again: {base_url}/login
Otherwise, request a password reset: {base_url}/password-lost
"""
    send_email(address, subject, txt)


def send_no_account_email(address):
    base_url = app.config["base_url"]
    subject = "No account found"
    txt = f"""Hello
We have received a request to reset the password for the Sano Genetics account associated with {address}
However, there is no account associated with {address} on our system.
This is why you're seeing this email instead of a password reset link.
Please click the link below to sign up:
{base_url}/register
If you didn't make this request you can safely ignore this email.
Thanks
The Sano Genetics Team
p.s. if you've remembered the email account you use for Sano Genetics, reset your password here: {base_url}/password-lost
"""
    send_email(address, subject, txt)


def upcase(input):
    iomap = {"macos": "MacOS", "chrome": "Chrome", "firefox": "Firefox"}
    return iomap[input] if (input in iomap) else input


def send_reset_email(address, reset_token, platform, browser):
    base_url = app.config["base_url"]
    subject = "Reset your password"

    txt = f"""Hello
We have received a request to reset the password for your Sano Genetics account.
Click the link below to reset your password:
{base_url}/resetpass/{reset_token}?no=1
For security reasons, this password reset is only valid for the next 10 minutes.
The request was received from a {upcase(platform)} device using {upcase(browser)}.
If you didn't make this request you can safely ignore this email.
If you're having any issues with your account just hit Reply to contact us directly.
"""
    send_email(address, subject, txt)


def send_subscribe_email_registered(address):
    subject = "Thanks for subscribing"
    txt = """Thanks for subscribing.
Thanks for subscribing to our newsletter! We hope you are enjoying the platform so far.
If you're having any issues with your account just hit Reply to contact us directly.
"""
    send_email(address, subject, txt)


def send_validation_email(address, validation_token):
    base_url = app.config["base_url"]
    subject = "Activate your account"

    txt = f"""Welcome to Sano Genetics
Thanks for signing up to Sano Genetics!
Click the link below to activate your account:
{base_url}/complete/{validation_token}?no=1
If you're having any issues with your account just hit Reply to contact us directly.
"""
    send_email(address, subject, txt)
