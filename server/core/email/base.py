import logging
import sys

from flask import current_app as app

from core.models import Users

logger = logging.getLogger(__name__)

txt_footer = """

Best,
The Sano Genetics Team

===================
Sano Genetics
WeWork
50-60 Station Road
Cambridge, Cambridgeshire CB1 2JH
United Kingdom
"""


def send_email(address, subject, txt_body, source="contact@sanogenetics.com"):
    logger.info(txt_body + txt_footer)
