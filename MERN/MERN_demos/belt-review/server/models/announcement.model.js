const mongoose = require("mongoose");

const defaultRequiredOptions = [true, "{PATH} is required."];
// {PATH} will insert the name of the key / prop

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: defaultRequiredOptions,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    description: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: defaultRequiredOptions,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    dislikeCount: {
      type: Number,
      default: 0,
    },
    primaryCategory: {
      type: String,
      required: defaultRequiredOptions,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    secondaryCategory: {
      type: String,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
  },
  { timestamps: true }
);

// creates the cities (auto pluralizes the name) collection and enforces the AnnouncementSchema on any new documents that are added to the collection
const Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = Announcement;
