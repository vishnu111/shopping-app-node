const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");
router.get("/products", shopController.getProducts);
router.post("/read-form", shopController.readForm);
module.exports = router;
