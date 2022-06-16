import requests
import sys

sys.path.append(".")

from core.models import Studies

Studies.delete().execute()

res = requests.get("https://dev.sanogenetics.com/dev/studies").json()
studies = res["data"]
for study in studies:
    Studies.create(**study)
