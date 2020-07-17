const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
    {
    setup: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [10, "{PATH} must be at least 10 characters long."],
    },
    punchline: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "{PATH} must be at least 3 characters long."],
    }
}, 
{timestamps:true}
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;

