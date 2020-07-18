const { Person } = require('../models/person.model');
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

module.exports.findNames = (req, res) => {
    Person.find()
    .then(names => res.json(res.json(names)))
    .catch(err => res.json(res.json(err)));
};
