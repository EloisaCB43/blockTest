const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../api/models/usersModel");


router.post("/signup",(req, res) => {
  // to check first if the email is already registered
User.find({
    email: req.body.email
  })
  .exec()
  .then(user=> {
    if(user.length >= 1){
return res.status(409).json({
  message: "This email already exists"
})
    } else {
      // to encript the password
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash,
          });
          user
            .save()
            .then((result) => {
              console.log(result);
              res.status(201).json({
                message: "The User is created",
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                error: err,
              });
            });
        }
      });
    }
  })

});

module.exports = router;
