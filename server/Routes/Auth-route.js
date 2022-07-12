const authRoute = require("express").Router();
const authCtrl = require("../Controllers/Auth-controller");

authRoute.post("/register", authCtrl.Register);
authRoute.post("/login", authCtrl.Login);

module.exports = authRoute;
