const authRoute = require("express").Router();
const authCtrl = require("../Controllers/Auth-controller");

authRoute.post("/register", authCtrl.register);
authRoute.post("/login", authCtrl.login);

module.exports = authRoute;
