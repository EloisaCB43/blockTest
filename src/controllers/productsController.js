const mongoose = require("mongoose");

const Product = require("../api/models/productsModel");

const controller = {
  create: async (req, res) => {
    console.log(req.file);
    const createProduct = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      productImage: req.file.path,
      price: req.body.price,
    });

    createProduct
      .save()
      .then((result) => {
        res.status(201).json({
          message: "The Product is created",
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
    // 10 by default, parseInt if a string is passed as limit instead of a number. brings the default amount of products
    const limitPage = parseInt(req.query.limit, 10) || 10;
    //  page 1 by default, parseInt if a string is passed in the query as page instead of a number. it shows the deafult page.
    const pageChange = parseInt(req.query.page, 10) || 1;
    Product.paginate({}, { limit: limitPage, page: pageChange })
      .then((result) => {
        return res.status(200).json({
          message: "GET request to all getAllProducts",
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
    Product.find({ _id: req.params.id })
      .then((result) => {
        return res.status(200).json({
          message: "GET request to One Product",
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
    Product.findOneAndUpdate({ _id: req.params.id }, { $set: updateField })
      .then((result) => {
        res.status(200).json({
          message: "The product has been updated",
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
    Product.deleteOne({ _id: req.params.id })

      .then((result) => {
        res.status(200).json({
          message: "The product has been successfully deleted",
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
