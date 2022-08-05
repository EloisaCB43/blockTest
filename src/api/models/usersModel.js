const mongoose = require("mongoose");
const { validateEmail, validatePassword } = require("../../utils/regex");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firtsName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    validate: [validateEmail, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    validate: [
      validatePassword,
      "password must contain at least 10 characters, one lowercase and uppercase letter and one special character",
    ],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
