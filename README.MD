# Back-end Homework

1. I used mongoose to create my Models: Movie and User.
2. I used Postman to test my HTTP/s requests.
3. I used bcrypt library to hash the password.
4. I used JWT to generate the Token and authentications.
5. I use require('crypto').randomBytes(64).toString('hex') to generate in the terminal the secret and refresh token key.
6. Installed npm i dotenv to load environment variables from a .env file into process.env. for the JWT.
7. in the .env I prepare the variables I was going to use to make the authentication with JWS.

## Routes for User signup, login and delete.

**in SIGNUP**

- It validates first in the if the email is a valid email with the message => "Please enter a valid email", it must have a format like this one = "test@test.com". if true, it checks the password and sends and error message when the password doesn´t have the right format.
- then it checks if the email already exist, if so, an error message will appear => "This email already exists" - then it hash the password.

**in LOGIN**

- It validates first in the if the email is a valid email with the message => "Please enter a valid email", it must have a format like this one = test@test.com. if true, it checks the password and sends and error message when the password doesn´t have the right format.
- if email and password are correct, the login sends the following message = "authentication Successful", and generates a token that I generated using Jsonwebtoken with the "jwt.sign(payload, secretOrPrivateKey, [options, callback])".
  -if you go to https://jwt.io/#debugger and test the token generated when POST http://localhost:3000/login, you will see the data

###### the routes for users

- POST http://localhost:3000/user/signup -- to signup/create a new user
- POST http://localhost:3000/user/login -- to login the user created
- DELETE http://localhost:3000/user/Id -- to delete a user, I used it mostly to delete test that were duplicated

## Routes for movie create, getAll, getOne, update, delete

- To autheticate the routes for movies I used a middleware called auth.js that I just placed in file moviesRoutes.js in the following routes :

  - POST http://localhost:3000/movie
  - PATCH http://localhost:3000/movie/:ids

- To authenticate the token of login, with the token authentication (to create and update a movie), please Login first with:
  POST http://localhost:3000/user/login this will generate a token, copy paste that token and go to the Authorization menu of postman, select "Bearer token" and paste the token.
- If I don't login first and do POST http://localhost:3000/movie and PATCH http://localhost:3000/movie/:id, the message "You don't have permission" will appear

###### the routes for movies

- POST http://localhost:3000/movie -- creates a new movie, I have to login first to get the token and have access
- GET http://localhost:3000/movie -- count and gets all movies in database
- GET http://localhost:3000/movie/:id -- brings the detail of one movie, I have to get movies first to get the id
- PATCH http://localhost:3000/movie/:id -- updates a movies field, I have to login first to get the token and have access
- DELETE http:/localhost:3000/movie/:id -- deletes a movie, I have to get movies first to get the \_id
