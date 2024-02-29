const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  subTitle: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1024,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[0-9]{10}$/.test(v),
      message: "Phone number must have 10 digits.",
    },
  },
  url: {
    type: String,
    validate: {
      validator: (v) =>
        /^(https?:\/\/)?[^\s\/]+\.[^\s\/]+\/\S+\.(jpg|jpeg|png|gif)$/.test(v),
      message: "Image url is not valid",
    },
  },
  alt: {
    type: String,
    maxlength: 256,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  web: {
    type: String,
    maxlength: 1024,
  },
  state: {
    type: String,
    maxlength: 256,
  },
  country: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  street: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  zip: {
    type: Number,
    max: 99999999,
  },
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Card = mongoose.model("card", cardSchema);

exports.Card = Card;
