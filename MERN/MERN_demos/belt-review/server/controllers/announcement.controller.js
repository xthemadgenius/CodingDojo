// contains the functions that will be executed when the corresponding route URL is visited
const Announcement = require("../models/announcement.model");

module.exports = {
  // long-form key: value
  //               (request, response)
  create: function (req, res) {
    Announcement.create(req.body)
      // first param of callback passed to .then will be the newly created document from the database
      .then((announcement) => {
        res.json(announcement);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    // console.log("getAll method");
    Announcement.find()
      .then((cities) => {
        res.json(cities);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    // Announcement.find({ _id: req.params.id })
    Announcement.findById(req.params.id)
      .then((announcement) => {
        res.json(announcement);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    Announcement.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((announcement) => {
        res.json(announcement);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    // Announcement.deleteOne({ _id: req.params.id })
    Announcement.findByIdAndDelete(req.params.id)
      .then((announcement) => {
        res.json(announcement);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
