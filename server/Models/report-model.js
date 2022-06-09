const mongoose = require("mongoose");
const report = new mongoose.Schema({
  Date: {
    type: Date,
    default: Date.now(),
  },
  weight: Number,
  RightHand: Number,
  LeftHand: Number,
  RightLeg: Number,
  LeftLeg: Number,
  belly: Number,
  chest: Number,
  buttock: Number,
});
module.exports = mongoose.model("report", report);
