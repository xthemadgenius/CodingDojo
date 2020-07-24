const AthleteController = require('../controllers/athlete.controller');

module.exports = function(app){
    app.get('/api/athletes', AthleteController.getAllAthletes);
    app.post('/api/athletes', AthleteController.createAthlete);
    app.get('/api/athletes/:id', AthleteController.getOneAthlete);
    app.put('/api/athletes/:id', AthleteController.updateAthlete);
    app.delete('/api/athletes/:id', AthleteController.deleteAthlete);
}
