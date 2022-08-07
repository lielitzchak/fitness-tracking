//! const passport = require("passport");
//! require("./Config/passport")(passport);
let dotenv = require("dotenv").config();
if (dotenv.error) {
  console.log(dotenv.error);
}
const express = require("express");
const APP = express();
const cors = require("cors");
require("./DB/db");
const TRAINING_PROGRAM_ROUTE = require("./Routes/Training-Program-Route.js");
const USER_ROUTE = require("./Routes/User-route.js");
const RECIPE_ROUTE = require("./Routes/Recipe-route.js");
const AUTH_ROUTE = require("./Routes/Auth-route.js");
const REPORT_ROUTE = require("./Routes/Report-route.js");

APP.use(express.json());
APP.use(cors());
APP.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 1010;

if (process.env.NODE_ENV === "production") {
  APP.use(express.static(path.join(__dirname, "../client/build")));
  APP.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
APP.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

APP.use("/auth", AUTH_ROUTE);
APP.use("/Training-Program", TRAINING_PROGRAM_ROUTE);
APP.use("/user", USER_ROUTE);
APP.use("/recipe", RECIPE_ROUTE);
APP.use("/report", REPORT_ROUTE);
APP.use("/", () => console.log("try again"));

// add heroku.

