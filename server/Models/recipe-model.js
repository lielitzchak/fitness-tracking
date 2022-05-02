const mongoose = require("mongoose");
const NutritionalValuesSchema = new mongoose.Schema({
  protein: Number,
  carbs: Number,
  fat: Number,
});
const Recipe = new mongoose.Schema(
  {
    Name: String,
    TimeToMake: String,
    vegan: Boolean,
    NutritionalValues: NutritionalValuesSchema,
    Candy: Boolean,
    Picture: String,
    isMilk: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", Recipe);

// let json = {
//   "Name": "pizza",
//   "TimeToMake": "30 minutes",
//   "vegan": true,
//   "NutritionalValues": {
//     "protein": "10",
//     "carbs": "10",
//     "fat": "10",
//   },
//   "Candy": false,
//   "Picture": "https://did.li/W2WfT",
//   "MadeOfMilk": true,
// };
