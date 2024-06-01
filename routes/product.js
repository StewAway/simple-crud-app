const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');  // Import Product model
const { getProducts, addProduct } = require('../controllers/product.js');  // Import controller

router.get('/', getProducts);
router.post('/', addProduct);

module.exports = router;