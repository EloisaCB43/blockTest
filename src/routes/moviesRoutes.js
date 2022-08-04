const express = require("express");
const router = express.Router();


const controller = require("../controllers/moviesController.js");

// GET http://localhost:3000/movie
router.get("/",controller.getAll)

// POST http://localhost:3000/movie
router.post("/",controller.create)

// router.get("/:id",controller.getOne)

// router.put("/:id",controller.update)
// router.delete("/:id", controller.delete)

module.exports = router;
