const mongoose = require("mongoose");

const Training = new mongoose.Schema({
  Exeresie: String,
  Set: String,
  Reps: String,
  Weight: String,
  Date: Date,
  Notes: String,
});

module.exports = mongoose.model("Training", Training);
