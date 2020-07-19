const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product title required"],
            minlength: [3, "Product title must be at least 3 characters long"],
        },
        price: {
            type: Number,
            required: [true, "Product price required"],
        },
        description: {
            type: String,
            required: [true, "Product title required"],
            minlength: [10, "Product title must be at least 10 characters long"],
        }
    },
    {timestamps: true}
);

module.exports.Product = mongoose.model('Product', ProductSchema);