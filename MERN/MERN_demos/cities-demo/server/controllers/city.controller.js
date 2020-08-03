// contains the functions that will be executed when the corresponding route URL is visited

const City = require("../models/city.model");

module.exports = {
  // long-form key: value
  //               (request, response)
  create: function (req, res) {
    City.create(req.body)
      // first param of callback passed to .then will be the newly created document from the database
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    // console.log("getAll method");
    City.find()
      .then((cities) => {
        res.json(cities);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    // City.find({ _id: req.params.id })
    City.findById(req.params.id)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    City.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update2(req, res) {
    City.findById(req.params.id)
      .then((city) => {
        city
          .updateOne(req.body, { runValidators: true })
          .then((status) => {
            res.json(status);
          })
          .catch((err) => {
            res.json(err);
          });
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    // City.deleteOne({ _id: req.params.id })
    City.findByIdAndDelete(req.params.id)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete2(req, res) {
    City.findById(req.params.id)
      .then((city) => {
        city
          .remove()
          .then((removedCity) => {
            res.json(removedCity);
          })
          .catch((err) => {
            res.json(err);
          });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
