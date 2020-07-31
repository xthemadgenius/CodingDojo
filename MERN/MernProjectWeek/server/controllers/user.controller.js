// contains the functions that will be executed when the corresponding route URL is visited
const User = require("../models/user.model");



module.exports = {
  newUser: function (req, res) {
    console.log("request body", req.body)
    User.create(req.body)
      .then((user) => {
        res.json(user);
        console.log("Added User to User Database");
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getGroup(req, res) {
    User.find()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },


  getUser(req, res) {
    User.findById({ _id: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
