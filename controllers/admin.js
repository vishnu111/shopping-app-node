const Product = require("../models/product");
exports.postAddProduct = (req, res, err) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const x = 6456;
  const product = new Product(title, price, description, imageUrl, null, x);
  product
    .save()
    .then((result) => {
      res.status().send(200);
      console.log("Product Created");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.editProduct = (req, res, err) => {
  const prodId = req.body.id;
  console.log(prodId);
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const x = 999;
  const product = new Product(
    updatedTitle,
    updatedPrice,
    updatedDesc,
    updatedImageUrl,
    prodId,
    x
  );
  product
    .save()
    .then((result) => {
      res.status().send(200);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.deleteProduct = (req, res, err) => {
  const prodId = req.body.item;
  Product.deleteById(prodId)
    .then((result) => {
      console.log("DELETED PRODUCT");
      res.status().send(200);
    })
    .catch((err) => {
      console.log(err);
    });
};
