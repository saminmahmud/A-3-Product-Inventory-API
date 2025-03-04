const express = require('express');
const Product = require('../models/products')

const productRouter = express.Router();


productRouter.get('/', async(req, res) => {
    const { sort } = req.query;
    const sortOrder = sort === 'desc' ? -1 : 1;

    const result = await Product.find().sort({ price: sortOrder });
    res.status(200).json(result);
});

productRouter.get('/:id', async(req, res) => {
    const result = await Product.findById(req.params.id);
    if(!result) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(result);
});

productRouter.get('/category/:name', async (req, res) => {
    const { name } = req.params;
    const { sort } = req.query; 
    const sortOrder = sort === 'desc' ? -1 : 1;
    try {
        const result = await Product.find({ category: name }).sort({ price: sortOrder });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

productRouter.get('/sort/price', async (req, res) => {
    const sortOrder = req.query.sort === 'desc' ? -1 : 1;

    try {
        const result = await Product.find().sort({ price: sortOrder });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

productRouter.post('/', async(req, res) => {
    try{
        const result = await Product.create(req.body);
        res.status(201).json(result);
    } catch(err) {
        res.status(400).json({ message: err.message || "Bad Request" });
    }
});



productRouter.put('/:id', async(req, res) => {
    const result = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({message: "Product updated successfully"});
});

productRouter.delete('/:id', async(req, res) => {
    const result = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Product deleted successfully"});
});

module.exports = productRouter;