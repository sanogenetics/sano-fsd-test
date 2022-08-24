# Sano Genetics Fullstack Engineer task

![image](https://user-images.githubusercontent.com/13378850/176657886-e99a1dff-afcf-431f-a093-757cddba0d15.png)

Thank you for taking the time to work on the Sano Genetics Fullstack Engineer test!

⚠️ Please, **do not fork this repository**. Instead, clone it into your own **private** repository on GitHub.

Instead of commiting your changes directly to the main/master branch, create a separate branch to commit your changes to. At the end of the test, submit a pull request to the main/master branch. This will allow us to see all the changes during the code review.

Use as many commits as you normally would and write a detailed description for the PR to describe any decisions you've made and anything else you feel is relevant.

Ideally, you should aim to spend no longer than 3 hours on the tasks. If you can’t completely finish it, that’s not a problem - just explain what is left to do and how you would do it.

If, due to time constraints, you prefer to take some shortcuts, or in a real world scenario you would implement a particular logic/code in a better way, please feel free to leave comments thoughout your code explaining your alternative approach.

# Installation

- Install Python 3.8 (if you don't want to downgrade your existing python, [Anaconda](https://www.anaconda.com/products/distribution) can help you out here)
- Install Node 12.x.x
- Within the `server` folder, create and activate a Python virtual environment (tested to work on OSX M1 using Python 3.8.5 and OSX Intel using Python version 3.8.10):
  - `pip install virtualenv`
  - `python3 -m venv venv`
  - Activate the virtual env
  - Run `pip install -r requirements.txt` to install all requirements
  - Seed your local database with example studies by running: `python run/seed_db.py`
  - Run the server locally with `python run/run_local.py`.
- In a separate terminal shell, within the `client` folder, download the client dependencies and run the client locally with `run/client`.
- Navigate to http://0.0.0.0:2000 in your browser

# Test tasks

## Task 1 - Register an account

Once both the client and server are running, navigate to http://0.0.0.0:2000/register using a browser and enter an email to create an account. The activation code will appear in your server logs. Retrieve it, follow the link in your browser, create a password, and continue to your dashboard.

## Task 2 - Retrieving available studies from the Sano API
You’ll see an empty Home tab. Navigate to the Studies tab. Write a public endpoint within rest/public.py to retrieve all available records from the Studies table and return them as JSON. You'll need to write an appropriate Peewee database query.


## Task 3 - Displaying available studies on the client
Display all available studies following these designs. Don’t worry about the study names, or making your implementation pixel perfect, just ensure that it is 80% complete and aesthetically pleasing on both desktop and mobile. You won’t have any information about enrollments yet, so just use placeholder values.

Desktop:

![image](https://user-images.githubusercontent.com/1719848/186408930-0601038d-0d18-4d67-be6d-b246224dd726.png)

Mobile:

![image](https://user-images.githubusercontent.com/1719848/186408833-6b5845b7-f509-4f27-9924-74dd67108c72.png)


## Task 4 - User joins a study
Suppose a user wants to join a study. Create a model in server/core/models.py file called Enrollments that is M2M between Users and Studies. When you save the server/core/models.py file, the table will be automatically created in your local database via a tool called peewee-db-evolve.

Write user authenticated endpoints within server/core/rest/user.py for Create and Delete (CRUD) operations on the Enrollments model, adhering to these REST API guidelines. Connect the buttons in the designs to trigger these respective operations so that:
Clicking “Join study” creates an enrollment
Clicking “Leave study” deletes an enrollment

Create a Loom video to explain the functionality, and include a link to the video in your project README.

## Task 5 - Client data stores
When we navigate between different pages, we need to wait for content to appear. What can we do to ensure that Studies and Enrollments data persist between different panels? Data can then be refreshed in the background via API calls to the server. If you have time, implement a pragmatic solution, otherwise, explain how you would do this in a paragraph.

## Task 6 - Forum system
Suppose we would like to build a forum section for each Study. Users can create Posts, and Comment on other Users’ Posts. How would you build this? What would the database models and relationships look like? Write a paragraph outlining your strategy, and what considerations we would need to take into account.

## Task 7 - Password security
When you created an account, you specified a password. How would we validate that a user password is sufficiently complex so that it is difficult to crack? Are there third party options we could use? Explain your recommendations in a paragraph, and if you have time, implement a pragmatic solution.

## Task 8 - Token authentication
This authentication system uses client localStorage. This is insecure. Why? Demonstrate how a third party client dependency could maliciously break this login. Explain your recommendations in a paragraph, and if you have time, implement a pragmatic solution to the problem.
