const express = require("express");
const router = express.Router();

const controller = require("../controllers/usersController.js");

// POST http://localhost:3000/user/signup
router.post("/signup", controller.signup);

// POST http://localhost:3000/user/login
router.post("/login", controller.login);

// DELETE http://localhost:3000/user/Id
router.delete("/:id", controller.delete);

module.exports = router;
