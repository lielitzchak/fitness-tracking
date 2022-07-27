const mongoose = require("mongoose");
const TrainingProgram = new mongoose.Schema(
  {
    Exeresie: String,
    Set: String,
    Reps: String,
    Weight: String,
    Date: { type: Date, default: Date.now() },
    Notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("trainingProgram", TrainingProgram);
