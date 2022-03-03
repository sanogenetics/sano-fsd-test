# Sano Genetics Full-stack engineer task

# Installation

- Install Python 3.8 and Node 12.x.x
- Install Postgres. For Mac, we recommend Postgres app: https://postgresapp.com/
- Run a local postgres server and create a new database called `fsd`
- Set `connection_url` key in `server/local-config.json` to the database URL
- Within the `server` folder, create and activate the Python virtual environment:
  - `pip install virtualenv`
  - `virtualenv -p python3 venv`
  - Activate the virtual env
  - Run `pip install -r requirements.txt` to install all requirements
  - Seed your local database with example studies by running: `python run/seed_db.py`
  - Run the server locally with `python run/run_local.py`.
- In a separate terminal shell, within the `client` folder, download the client dependencies and run the client locally with `run/client`.
- Navigate to http://0.0.0.0:2000 in your browser
