const { Person } = require('../models/person.model');
const { response } = require('express');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName,
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (req, res) => {
    Person.find({})
    .then(person => res.json(person))
    .catch(err => res.json(err));
};

module.exports.getPerson = (req, res) => {
    Person.findOne({_id:req.params.id})
        .then(person =>res.json(person))
        .catch(err =>res.json(err))
}

module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updatedPerson => res.json(updatedPerson))
    .catch(err => res.json(err));
}