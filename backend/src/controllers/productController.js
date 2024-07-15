const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });

    const { title, description, inventory_count } = req.body;

    try {
        const product = new Product({ title, description, inventory_count });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: 'Product creation failed' });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

exports.updateProduct = async (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'manager') return res.status(403).json({ error: 'Access denied' });

    const { id } = req.params;
    const updates = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, updates, { new: true });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: 'Product update failed' });
    }
};

exports.deleteProduct = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });

    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Product deletion failed' });
    }
};
