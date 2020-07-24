const mongoose = require("mongoose");
const AthleteSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[
            true,
            "user needs first name"
        ]
    },
    lastName:{
        type: String,
        required:[
            true,
            "user needs last name"
        ]
    },
    sport:{
        type: String,
    },
    team:{
        type: String,
    }
}, {timestamps: true});

module.exports.Athlete = mongoose.model("Athlete", AthleteSchema);