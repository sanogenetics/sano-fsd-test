import requests
import sys

sys.path.append(".")

from core.models import Studies

Studies.delete().execute()

url = "https://dev.sanogenetics.com/dev/public/read"
studies = requests.get(url + "/studies").json()

for study in studies:
    Studies.create(**study)
