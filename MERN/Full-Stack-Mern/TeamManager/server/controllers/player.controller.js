const {Player} = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    const {name, position, game1, game2, game3} = req.body;
    Player.create({
        name, 
        position,
        status:{
            game1,
            game2,
            game3
        }
    })
    .then(player => res.json(player))
    .catch(err => res.status(500).json(err))
};

module.exports.findAllPlayers = (req, res) => {
    Player.find({})
    .then(allPlayers => res.json(allPlayers))
    .catch(err => res.status(500).json(err));
};

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
    .then(player => res.json(player))
    .catch(err => res.status(500).json(err));
};

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id:req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
};

module.exports.updatePlayer = (req, res) => {
    Player.updateOne({_id:req.params.id}, req.body, {new:true})
    .then(updatedPlayer => {
        res.json(updatedPlayer)
    })
    .catch(err => res.status(500).json(err))
};