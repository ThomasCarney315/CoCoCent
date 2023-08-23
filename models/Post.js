const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ingredients: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
    required: true,
  },
  instagramLink: {
    type: String,
    required: false,
  },
  youtubeLink: {
    type: String,
    required: false,
  },
  tiktokLink: {
    type: String,
    required: false,
  },
  twitterLink: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Post", PostSchema);
