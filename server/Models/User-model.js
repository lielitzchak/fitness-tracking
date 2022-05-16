const mongoose = require("mongoose");

const User = new mongoose.Schema({
  Username: String,
  Password: String,
  Admin: Boolean,
  Email: { type: String, required: true, unique: true },

} , { timestamps: true });

module.exports = mongoose.model("User", User);
