const mongoose = require("mongoose");

const Movie = require("../api/models/MoviesModel");

const controller = {
  create: async (req, res) => {
    const createMovie = new Movie({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      author: req.body.autor,
      price: req.body.price,
    });

    createMovie
      .save()
      .then((result) => {
        res.status(201).json({
          message: "The Movie is created",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
  getAll: async (req, res) => {
    Movie.find({})
      .then((result) => {
        return res.status(200).json({
          message: "GET request to all getAllMovies",
          dataCount: result.length,
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  getOne: async (req, res) => {
    Movie.findOne({ _id: req.params.id })
      .then((result) => {
        return res.status(200).json({
          message: "GET request to One Movie",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
  update: async (req, res) => {
    const updateField = req.body;
    Movie.findOneAndUpdate({ _id: req.params.id }, { $set: updateField })
      .then((result) => {
        res.status(200).json({
          message: "The movie has been updated",
          result: updateField,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
  delete: (req, res) => {
    Movie.deleteOne({ _id: req.params.id })

      .then((result) => {
        res.status(200).json({
          message: "The movie has been successfully deleted",
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
