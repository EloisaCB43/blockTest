const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  deletedAt: {
    type: Date,
  },
 
});

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
