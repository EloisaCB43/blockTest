const express = require("express");
const router = express.Router();
const authToken = require("../middleware/auth");

const controller = require("../controllers/moviesController.js");

// GET http://localhost:3000/movie
router.get("/", controller.getAll);

// POST http://localhost:3000/movie
router.post("/", authToken, controller.create);

// GET http://localhost:3000/movie/:id
router.get("/:id", controller.getOne);

// PATCH http://localhost:3000/movie/:id
router.patch("/:id", authToken, controller.update);

// DELETE http:/localhost:3000/movie/:id
router.delete("/:id", authToken, controller.delete);

module.exports = router;
