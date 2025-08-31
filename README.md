# Title Name - User Management Application

## Objective : 
     The aim of the project is to create a CRUD (Create, Read, Update, Delete) to manage users.Used 
     publicly available API like JSON placeholder to fetch a list of users.

## Technologies Used : 
       ReactJS 
       CSS 

## Platform Used : 
      Visual Studio 

## How to start the Server: 
      cd .\crud\
      npm run dev

# JSON Placeholder API Used: 
        "https://jsonplaceholder.typicode.com/users"


## Functionalities: 

    1. Fetch Users:Fetches a list of users from the JSON Placeholder API and display them on the 
       page in a list or table format. Each user should displays a basic information like name,
       email, phone.

    2. Create User:It should be a form to create a new user.I have used POST the new user data to the
       JSON Placeholder API (but it won't actually create a new user,it will simulate the action and 
       returns the data that we sent).

    3. Update User:Each user should have an "Edit" button.When this edit button is clicked,a form 
       should be displayed with the user's data with pre-filled.Changes can be made and submitted.
       It performs a PUT request to the JSON Placeholder API to simulate updating the user data.

    4. Delete User:Each user should have a "Delete" button.When clicked,this should perform a DELETE 
       request to the JSON Placeholder API to simulate deleting the user.  


## THANK YOU ##    