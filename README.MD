--- I used Postman to test my HTTP/s requests

1. Routes for User signup, login and delete.

1. in SIGNUP
   - It validates first in the if the email is a valid email with the message => "Please enter a valid email", it must have a format like this one = test@test.com. if true, it checks the password and send and error message when the password doesn´t have the right format
     - then it checks if the email already exist, if so, an error message will appear => "This email already exists"
       - then it hash the password

POST http://localhost:3000/user/signup
POST http://localhost:3000/user/login
DELETE http://localhost:3000/user/Id

2. Routes for movie create, getAll, getOne, update, delete

- POST http://localhost:3000/movie -- creates a new movie
- GET http://localhost:3000/movie -- count and gets all movies in database
- GET http://localhost:3000/movie/:id -- brings the detail of one movie, I have to login first to get the \_id in the terminal and the use it in the route.
- PATCH http://localhost:3000/movie/:id -- updates a movies field, I have to login first to get the \_id in the terminal and the use it in the route
- DELETE http:/localhost:3000/movie/:id -- deletes a movie, I have to login first to get the \_id in the terminal and the use it in the route

if you go to https://jwt.io/#debugger and test the token generated when POST http://localhost:3000/login, you will see the data

---adquired one token from the login
---then I do in postman (POST htt://localhost:3000/movie) and click in form-data.
---then I fill up with the req.body and add a KEY token and paste the token I received from the user login
