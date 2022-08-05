const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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

movieSchema.plugin(mongoosePaginate);

const movieModel = mongoose.model("Movie", movieSchema, "Movie");

module.exports = movieModel;
