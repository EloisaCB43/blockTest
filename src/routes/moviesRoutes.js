const express = require("express");
const router = express.Router();
const authToken = require("../middleware/auth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, (new Date().toISOString() + file.originalname).replace(/:/g, "-"));
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  }
  cb(null, false);
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
const controller = require("../controllers/moviesController.js");

// GET http://localhost:3000/movie
router.get("/", controller.getAll);

// POST http://localhost:3000/movie
router.post("/", authToken, upload.single("productImage"), controller.create);

// GET http://localhost:3000/movie/:id
router.get("/:id", controller.getOne);

// PATCH http://localhost:3000/movie/:id
router.patch("/:id", authToken, controller.update);

// DELETE http:/localhost:3000/movie/:id
router.delete("/:id", authToken, controller.delete);

module.exports = router;
