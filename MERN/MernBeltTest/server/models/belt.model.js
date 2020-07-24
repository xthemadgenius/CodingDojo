const mongoose = require("mongoose");
const BeltSchema = new mongoose.Schema({
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
    }
}, {timestamps: true});

module.exports.Belt = mongoose.model("Belt", BeltSchema);