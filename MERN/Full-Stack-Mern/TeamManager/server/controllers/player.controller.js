const Player = require('../models/player.model');

module.exports.createPlayer = (request, response) => {
    const {name, position, game1, game2, game3} = request.body;
    Player.create({
        name, 
        position,
        status:{
            game1,
            game2,
            game3
        }
    })
    .then(player => response.json(player))
    .catch(err => response.status(500).json(err))
};

module.exports.findAllPlayers = (request, response) => {
    Player.find({})
    .then(allPlayers => response.json(allPlayers))
    .catch(err => response.status(500).json(err));
};

module.exports.findOnePlayer = (request, response) => {
    Player.findOne({_id: request.params.id})
    .then(player => response.json(player))
    .catch(err => response.status(500).json(err));
};

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json({message: "Something went wrong", error: err}));
};

module.exports.updatePlayer = (request, response) => {

    console.log(request.body);
    Player.updateOne({_id:request.params.id}, request.body, {new:true})
    .then(updatedPlayer => {
        // console.log(updatedPlayer)
        response.json(updatedPlayer)
    })
    .catch(err => {
        console.log(err);
        response.status(500).json(err)
    })
};