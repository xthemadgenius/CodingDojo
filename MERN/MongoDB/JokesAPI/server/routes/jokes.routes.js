const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/random_joke", JokeController.findAllJokes);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};