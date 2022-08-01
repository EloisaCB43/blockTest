const express = require("express");
const mongoose = require("mongoose");

// db connection
try {
  mongoose
    .connect(
      "mongodb://localhost:27017/apiBlock",
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

// important built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended:false }));
app.use(express.json());


app.listen(3000, () => console.log("Server running in port 3000"));

const userRoutes = require("./src/routes/usersRoutes");

app.use("/user", userRoutes);
