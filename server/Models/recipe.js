const mongoose = require("mongoose");
const ArachimTzunatimSchema = new mongoose.Schema({
  protein: Number,
  carbs: Number,
  fat: Number,
});
const recipe = new mongoose.Schema({
  Name: { String },
  TimeToMake: { String },
  Tivoni: { Boolean },
  ArachimTzunatim: { ArachimTzunatimSchema },
  Candy: { Boolean },
  Picture: { String },
  Chalavi: { Boolean },
});

module.export = mongoose.model("recipe", recipe);
