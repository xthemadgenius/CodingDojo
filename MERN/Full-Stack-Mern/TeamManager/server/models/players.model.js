const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Player Name is Required"
        ]
    },
    position: {
        type: String,
        required: [
            false
        ]
    },
    status: {
        game1: {type: Number},
        game2: {type: Number},
        game3: {type: Number},
    }
}, {timestamps:true})
module.exports.Player = mongoose.models('Player', PlayerSchema);