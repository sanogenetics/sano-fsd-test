# Sano Genetics Full-stack engineer task

# Installation

- Install Python 3.8 and Node 12.x.x
- Within the `server` folder, create and activate a Python virtual environment (tested to work on OSX M1 using Python 3.8.5 - Anaconda):
  - `pip install virtualenv`
  - `python3 -m venv venv`
  - Activate the virtual env
  - Run `pip install -r requirements.txt` to install all requirements
  - Seed your local database with example studies by running: `python run/seed_db.py`
  - Run the server locally with `python run/run_local.py`.
- In a separate terminal shell, within the `client` folder, download the client dependencies and run the client locally with `run/client`.
- Navigate to http://0.0.0.0:2000 in your browser
