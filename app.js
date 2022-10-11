const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { MONGO_URI, PORT } = process.env;
// db connection
try {
  mongoose
    .connect(
      MONGO_URI,
      // security connections
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((response) => {
      console.log("dbconnection info");
      console.log(response);
    });
} catch (error) {
  console.log(error);
}

// App instance
const app = express();
app.set("puerto", PORT);

// important built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(app.get("puerto"), () =>
  console.log(`Server running in port ${app.get("puerto")}`)
);

const usersRoutes = require("./src/routes/usersRoutes");
const productsRoutes = require("./src/routes/productsRoutes");

app.use("/user", usersRoutes);
app.use("/product", productsRoutes);
