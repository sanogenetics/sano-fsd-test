import requests
import sys

sys.path.append(".")

from core.models import Studies

Studies.delete().execute()

studies = requests.get("https://dev.sanogenetics.com/dev/studies").json()

for study in studies:
    Studies.create(**study)
