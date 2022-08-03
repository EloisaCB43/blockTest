const express = require("express");
const router = express.Router();

const controller = require ('../controllers/usersController.js');

router.post("/signup",controller.signup)
router.post("/login",controller.login)
router.delete("/:id",controller.delete)
module.exports = router;
