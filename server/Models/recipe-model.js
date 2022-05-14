const mongoose = require("mongoose");
const NutritionalValuesSchema = new mongoose.Schema({
  protein: Number,
  carbs: Number,
  fat: Number,
});
const Recipe = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "need to write the recipe's name."],
    },
    TimeToCook: String,
    Vegan: Boolean,
    NutritionalValues: NutritionalValuesSchema,
    Candy: Boolean,
    Picture: String,
    IsMilk: Boolean,
    HowToMake: String,
    Summary: String,
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
//  "HowToMake":"1. Put the dough in a pan.\n2. Put the sauce in a pan.\n3. Put the cheese
// in a pan.\n4. Put the meat in a pan.\n5. Put the veggies in a pan.\n6. Put the sauce in a
//  pan.\n7. Put the cheese in a pan.\n8. Put the meat in a pan.\n9. Put the veggies in a pan.\n10.
// Put the sauce in a pan.\n11. Put the cheese in a pan.\n12. Put the meat in a pan.\n13. Put the veggies
//  in a pan.
// };
