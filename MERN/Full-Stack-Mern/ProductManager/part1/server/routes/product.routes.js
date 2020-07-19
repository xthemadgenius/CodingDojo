const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
}