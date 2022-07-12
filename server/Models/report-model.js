const mongoose = require("mongoose");
const report = new mongoose.Schema({
  Date: {
    type: Date,
    default: Date.now(),
  },
  Weight: Number,
  RightHand: Number,
  LeftHand: Number,
  RightLeg: Number,
  LeftLeg: Number,
  Belly: Number,
  Chest: Number,
  Buttock: Number,
});
module.exports = mongoose.model("report", report);
