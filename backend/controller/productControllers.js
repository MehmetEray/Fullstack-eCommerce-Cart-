const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(err);
        res.status(500).json({
            message: "Server Error (productController.js - getAllProducts)",
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (error) {
        console.log(err);
        res.status(500).json({
            message: "Server Error (productController.js - getProductById)",
        });
    }
};

module.exports = { getAllProducts, getProductById };
