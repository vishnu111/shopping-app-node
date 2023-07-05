const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();
router.post("/add-product", adminController.postAddProduct);
router.post("/edit-product", adminController.editProduct);
router.post("/delete-product", adminController.deleteProduct);
module.exports = router;
