const Product = require('../models/product.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if (products === null) res.status(404).json({ message: 'Product not found' });
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await new Product(req.body);
        if (!Product.find({name: product.name, price: product.price, quantity: product.quantity})) 
            return res.status(400).json({ message: 'Product already exists' });
        Product.create(product);
        return res.status(200).json({message: "Product added successfully"});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = { 
    getProducts, 
    addProduct
};