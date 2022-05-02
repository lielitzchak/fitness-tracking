const mongoose = require("mongoose");
const NutritionalValuesSchema = new mongoose.Schema({
  protein: Number,
  carbs: Number,
  fat: Number,
});
const recipe = new mongoose.Schema({
  Name: { String },
  TimeToMake: { String },
  vegan: { Boolean },
  NutritionalValues: { NutritionalValuesSchema },
  Candy: { Boolean },
  Picture: { String },
  MadeOfMilk: { Boolean },
});

module.export = mongoose.model("recipe", recipe);
// let json = {
//   Name: "pizza",
//   TimeToMake: "30 minutes",
//   vegan: true,
//   NutritionalValues: {
//     protein: "10",
//     carbs: "10",
//     fat: "10",
//   },
//   Candy: false,
//   Picture: "https://did.li/W2WfT",
//   MadeOfMilk: true,
// };
