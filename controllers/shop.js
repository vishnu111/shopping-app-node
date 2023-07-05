const Product = require("../models/product");

exports.getProducts = (req, res, err) => {
  Product.fetchAll().then((products) => {
    res.end(JSON.stringify(products));
  });
};
exports.readForm = (req, res, err) => {
  const { firstname, email, phone } = req.body;
  console.log(firstname);
};
