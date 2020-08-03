const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    population: {
      type: Number,
      required: [true, "{PATH} is required."],
      min: [0, "{PATH} must have a minimum value of {MIN}."],
    },
    imgUrl: {
      type: String,
      required: [true, "{PATH} is required."],
    },
  },
  { timestamps: true }
);

// creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const City = mongoose.model("City", CitySchema);

module.exports = City;
