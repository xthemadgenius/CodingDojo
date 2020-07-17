const JokeController = require('../controllers/jokes.controller');

// module.exports = app => {
//     app.post("/api/jokes/", JokeController.findAllJokes);
//     app.get("/api/random_joke", JokeController.findOneJoke);
//     app.post("/api/jokes/update/:id", JokeController.updateJoke);
    // app.post("/api/jokes/new", JokeController.createNewJoke);
//     app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
// };

module.exports = (app) => {
    app.get("/api/jokes", JokeController.getAll);
    app.get("/api/jokes/random/:id", JokeController.getOne);
    app.post("/api/jokes/new", JokeController.create);
    app.delete("/api/jokes/delete/:id", JokeController.delete2);
    app.put("/api/jokes/update/:id", JokeController.update2);
}