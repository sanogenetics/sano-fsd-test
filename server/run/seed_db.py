import requests
import sys

sys.path.append(".")

from core.models import Studies

Studies.delete().execute()

url = "https://sanogenetics.com/prod/"
studies = requests.get(url + "/studies").json()["studies"]

for study in studies:
    Studies.create(**study)
