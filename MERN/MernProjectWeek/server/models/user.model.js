const mongoose = require("mongoose");
const { urlencoded } = require("express");
const bcrypt = require("bcrypt");

const defaultRequiredOptions = [true, "{PATH} is required."];

const UserSchema = new mongoose.Schema(
  {
    accountType: {
      type: String,
      // required: [true, "You must select Personal or Business Account"],
    },
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
    skills: {
      type: String,
    },
  },
  { timestamps: true }
);

// Virtuals
// UserSchema.virtual("confirmPassword")
//   .get(() => this._confirmPassword)
//   .set((value) => (this._confirmPassword = value));
// // Pre
// UserSchema.pre("validate", function (next) {
//   if (this.password !== this.confirmPassword) {
//     this.invalidate("confirmPassword", "Password must match confirm password");
//   }
//   next();
// });

// UserSchema.pre("save", function (next) {
//   bcrypt.hash(this.password, 10).then((hash) => {
//     this.password = hash;
//     next();
//   });
// });



const User = mongoose.model("User", UserSchema);

module.exports = User;
