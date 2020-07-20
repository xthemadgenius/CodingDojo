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

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
}