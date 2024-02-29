const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },
  middleName: {
    type: String,
    maxlength: 15,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  email: {
    type: String,
    required: true,
    maxlength: 256,
    unique: true,
    // No need for minlength as email format validation would cover that
  },
  password: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    maxlength: 1024,
  },
  imageAlt: {
    type: String,
    maxlength: 256,
  },
  state: {
    type: String,
    maxlength: 256,
  },
  country: {
    type: String,
    required: true,
    maxlength: 256,
  },
  city: {
    type: String,
    required: true,
    maxlength: 256,
  },
  street: {
    type: String,
    required: true,
    maxlength: 256,
  },
  houseNumber: {
    type: String, // Considering house numbers can be alphanumeric
    required: true,
    maxlength: 256,
  },
  zip: {
    type: String,
    maxlength: 256, // Adjusting for alphanumeric ZIPs
  },
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
