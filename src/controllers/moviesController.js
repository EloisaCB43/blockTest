const mongoose = require("mongoose");

const Movie = require("../api/models/MoviesModel");

const controller = {
  create: async (req, res) => {
    console.log(req.body)
    const createMovie = new Movie({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      autor: req.body.autor,
      price: req.body.price
    });  

    createMovie
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "The Movie is created",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
  getAll: async (req, res) => {
    const theMovies = Movie.find({})
      .then((result) => {
        return res.status(200).json({
          message: "GET request to all getAllMovies",
        ...req.body
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
