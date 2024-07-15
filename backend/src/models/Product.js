const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    inventory_count: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
