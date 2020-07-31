const mongoose = require("mongoose");
const BeltSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[
            true,
            "Name your pet"
        ],
        minlength:[
            3,
            "Pet Name must be at least 3 characters long"
        ]
    },
    petType:{
        type: String,
        required:[
            true,
            "What type of breed is your pet"
        ],
        minlength:[
            3,
            "Pet type must be at least 3 characters long"
        ]
    },
    description:{
        type: String,
        required:[
            true,
            "You need a description for the Pet"
        ],
        minlength:[
            3,
            "Pet Description must be at least 3 characters long"
        ]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
}, {timestamps: true});

module.exports.Belt = mongoose.model("Belt", BeltSchema);