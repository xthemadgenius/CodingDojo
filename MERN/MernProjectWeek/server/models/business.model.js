const mongoose = require("mongoose");
const { urlencoded } = require("express");
const bcrypt = require("bcrypt");

const defaultRequiredOptions = [true, "{PATH} is required."];

const BusinessSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: defaultRequiredOptions,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    lastName: {
      type: String,
      required: defaultRequiredOptions,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    company: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      required: defaultRequiredOptions,
      minlength: [10, "{PATH} must be at least {MINLENGTH} characters."],
    },
    email: {
      type: String,
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    location: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },
  },
  { timestamps: true }
);
const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;
