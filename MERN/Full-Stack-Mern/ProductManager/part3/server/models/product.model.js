const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:[
                true,
                "n,eeds title for player"
            ],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
        },
        price: {
            type: Number
        },
        description: {
            type: String
        }
    },
    {timestamps: true}
);

module.exports.Product = mongoose.model('Product', ProductSchema);