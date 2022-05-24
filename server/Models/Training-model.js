const mongoose = require("mongoose");

const Training = new mongoose.Schema(
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

module.exports = mongoose.model("Training", Training);

// let training = {
//   "Exeresie": "Bench Press",
//   "Set": "3",
//   "Reps": "10",
//   "Weight": "100",
//   "Date": new Date().getFullYear() +
//   "-" +
//   (new Date().getMonth() + 1) +
//   "-" +
//   new Date().getDate(),
//  "Notes": "",
// };

let json = {
  Exeresie: "Bench Press",
  Set: "3",
  Reps: "10",
  Weight: "100",
  Date: "2020-05-02",
  Notes: "",
};
