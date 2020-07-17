const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Joke is required."],
        required: [10, "Joke must be at least 10 characters long."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required."],
        required: [3, "Punchline must be at least 3 characters long."]
    }
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;