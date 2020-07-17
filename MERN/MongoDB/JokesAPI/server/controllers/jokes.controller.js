const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(jokes => res.json({ joke: jokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.makeNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJokes => res.json({ joke: newJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.update({_id: req.params.id}, req.body, {new:true})
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({ joke: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};