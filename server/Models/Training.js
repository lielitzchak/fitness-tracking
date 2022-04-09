const mongoose = require("mongoose");

const Training = new mongoose.Schema({
  Set: String,
  Reps: String,
  Weight: String,
  Date: String,
  Notes: String,
});

module.exports = mongoose.model("Training", Training);
