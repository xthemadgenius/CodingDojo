const {Athlete} = require('../models/athlete.model');

module.exports.createAthlete = (req,res) => {
    const {firstName, lastName, sport, team} = req.body;
    Athlete.create({
        firstName,
        lastName,
        sport,
        team
    })
    .then(athlete => res.json(athlete))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllAthletes = (req,res) => {
    Athlete.find({})
    .then(athlete => res.json(athlete))
    .catch(err => res.status(400).json(err));
}

module.exports.getOneAthlete = (req,res) => {
    Athlete.findOne({_id: req.params.id}) 
    .then(detail => res.json(detail))
    .catch(err => res.json(err));
}

module.exports.updateAthlete = (req,res) => {
    Athlete.updateOne({_id: req.params.id}, req.body, {new: true})
    .then(edit => res.json(edit))
    .catch(err => res.json(err));
}

module.exports.deleteAthlete = (req,res) => {
    Athlete.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.status(400).json(err))
}