const mongoose = require("mongoose");
const report = new mongoose.Schema({
  Date: Date,
  weight: Number,
  RightHand: Number,
  LeftHand: Number,
  RightLeg: Number,
  LeftLeg: Number,
  belly: Number,
  chest: Number,
  buttock: Number,
});
exports.report = mongoose.model("report", report);
