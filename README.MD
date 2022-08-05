1. Use en el JSON "type": "module" para poder hacer import de express.
2. I use require('crypto').randomBytes(64).toString('hex') to generate the secret token key
3. Installed npm i dotenv to load environment variables from a .env file into process.env. for the JWT
4. if you go to https://jwt.io/#debugger and test the token generated when POST http://localhost:3000/login, you will see the data 


---adquired one token from the login 
---then I do in postman  (POST htt://localhost:3000/movie) and click in form-data. 
---then I fill up with the req.body and add a KEY token and paste the token I received from the user login