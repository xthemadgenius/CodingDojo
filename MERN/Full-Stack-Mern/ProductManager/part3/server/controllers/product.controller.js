const { Product } = require('../models/product.model')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (req, res) => {
    const {title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.findProd = (req, res) => {
    Product.find()
    .then(prod => res.json(res.json(prod)))
    .catch(err => res.json(res.json(err)));
};

module.exports.showProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(prod => res.json(prod))
    .catch(err => res.json(err));
}