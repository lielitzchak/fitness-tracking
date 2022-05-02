const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: String,
  password: String,
  admin: Boolean,
  email: { type: String, required: true, unique: true },

} , { timestamps: true });

module.exports = mongoose.model("User", User);
