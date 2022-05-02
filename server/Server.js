let result = require("dotenv").config();
if (result.error) {
  console.log(result.error);
}
const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/db");
const TRAINING = require("./Routes/Training-route.js");
const USER = require("./Routes/User-route.js");
const RECIPE = require("./Routes/Recipe-route.js");
//! const passport = require("passport");
//! require("./Config/passport")(passport);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 1010;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use("/training", TRAINING);
app.use("/user", USER);
app.use("/recipe", RECIPE);
app.use("/", () => console.log("try again"));

// add heroku.
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//   });
// }
