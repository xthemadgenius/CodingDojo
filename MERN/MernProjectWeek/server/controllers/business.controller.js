// contains the functions that will be executed when the corresponding route URL is visited
const Business = require("../models/business.model");


module.exports = {
  newBusiness: function (req, res) {
    console.log("request body", req.body)
    Business.create(req.body)
      .then((business) => {
        res.json(business);
        console.log("Added User to User Database");
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getGroup(req, res) {
    Business.find()
      .then((business) => {
        res.json(business);
      })
      .catch((err) => {
        res.json(err);
      });
  },


  getBusiness(req, res) {
    Business.findById({ _id: req.params.id })
      .then((business) => {
        res.json(business);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  deleteBusiness(req, res) {
    Business.findByIdAndDelete(req.params.id)
      .then((business) => {
        res.json(business);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  updateBusiness(req, res) {
    Business.findByIdAndUpdate(req.params.id, req.body)
      .then((business) => {
        res.json(business);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
