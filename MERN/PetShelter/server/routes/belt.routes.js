const BeltController = require('../controllers/belt.controller');

module.exports = function(app){
    app.get('/api/belts', BeltController.getAllBelts);
    app.post('/api/belts', BeltController.createBelt);
    app.get('/api/belts/:id', BeltController.getOneBelt);
    app.put('/api/belts/:id', BeltController.updateBelt);
    app.delete('/api/belts/:id', BeltController.deleteBelt);
}
