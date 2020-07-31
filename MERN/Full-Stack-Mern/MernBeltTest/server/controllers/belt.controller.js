const {Belt} = require('../models/belt.model');

module.exports.createBelt = (req,res) => {
    const {name, petType, description, skill1,skill2,skiil3} = req.body;
    Belt.create({
        name,
        petType,
        description,
        skill1,
        skill2,
        skiil3
    })
    .then(belt => res.json(belt))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllBelts = (req,res) => {
    Belt.find({})
    .then(belt => res.json(belt))
    .catch(err => res.status(400).json(err));
}

module.exports.getOneBelt = (req,res) => {
    Belt.findOne({_id: req.params.id}) 
    .then(detail => res.json(detail))
    .catch(err => res.json(err));
}

module.exports.updateBelt = (req,res) => {
    Belt.updateOne({_id: req.params.id}, req.body, {new: true, runValidators:true})
    .then(edit => res.json(edit))
    .catch(err => res.status(400).json(err));
}

module.exports.deleteBelt = (req,res) => {
    Belt.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.status(400).json(err))
}
