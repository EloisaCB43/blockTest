const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

const User = require("../api/models/usersModel");
const { validateEmail, validatePassword } = require("../utils/regex");

const controller = {
  signup: async (req, res) => {
    try {
      // To validate email and password

      if (!validateEmail(req.body.email)) {
        return res.status(400).json({
          message: "Please enter a valid email",
        });
      }
      if (!validatePassword(req.body.password)) {
        return res.status(400).json({
          message:
            "password must contain at least 10 characters, one lowercase and uppercase letter and one special character",
        });
      }
      // to check first if the email is already registered
      User.find({
        email: req.body.email,
      })
        .exec()
        .then((user) => {
          if (user.length >= 1) {
            return res.status(409).json({
              message: "This email already exists",
            });
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
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  },

  login: (req, res) => {
    if (!validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "Please enter a valid email",
      });
    }
    if (!validatePassword(req.body.password)) {
      return res.status(400).json({
        message:
          "password must contain at least 10 characters, one lowercase and uppercase letter and one special character",
      });
    }
    // first check the user email , then checks if its empty and compares the password from signup to the one in the login info
    User.find({ email: req.body.email })
      .then((user) => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "authentication is missing",
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "authentication is missing",
            });
          }
          if (result) {
            // jwt.sign(payload, secretOrPrivateKey, [options, callback])
            // Paylod -- what should be pass to the client email and id_user,  contains the claims
            const tokenGenerate = jwt.sign(
              {
                email: user[0].email,
                id: user[0]._id,
              },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: "20m",
              },
              process.env.ACCESS_TOKEN_SECRET
            );
            return res.status(200).json({
              message: "authentication Successful",
              token: tokenGenerate,
            });
          } else {
            return res.status(401).json({
              message: "authentication failed",
            });
          }
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  delete: (req, res) => {
    User.deleteOne({ _id: req.params.id })

      .then((result) => {
        res.status(200).json({
          message: "The user has been successfully deleted",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
};
module.exports = controller;
