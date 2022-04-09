const mongoose = require("mongoose");
const dbConnection = process.env.CONNECTION_STRING;
mongoose.connect(
  dbConnection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connect");
    console.log("you can start to work");
  }
);

module.exports = mongoose.connection;
