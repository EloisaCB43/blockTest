const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
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

productSchema.plugin(mongoosePaginate);

const productModel = mongoose.model("Product", productSchema, "Product");

module.exports = productModel;
