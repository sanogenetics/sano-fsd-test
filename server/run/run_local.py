""" run_local.py

   isort:skip_file
"""

import sys

sys.path.append(".")
sys.path.append("..")

from core.app import app

if __name__ == "__main__":
    try:
        app.run()
    except OSError as e:
        print("Server is already running somewhere else.")
