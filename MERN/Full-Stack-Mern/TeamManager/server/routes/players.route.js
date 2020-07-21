const PlayerController = require('../controllers/player.controller');
const { Player } = require('../models/players.model');

module.exports = function(app) {
    app.get('/api/player', PlayerController.findAllPlayers);
    app.post('.api/player', PlayerController.createPlayer);
    app.get('/api/player/:id', PlayerController.findOnePlayer);
    app.put('.api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);
}