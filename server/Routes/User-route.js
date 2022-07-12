const USER_ROUTE = require("express").Router();
const USER_CONTROLLER = require("../Controllers/User-controller");
USER_ROUTE.get("/", USER_CONTROLLER.getAllUsers);
USER_ROUTE.get("/:id", USER_CONTROLLER.getUserById);
USER_ROUTE.get("/:Email/:Password", USER_CONTROLLER.getUserByEmail);
USER_ROUTE.post("/", USER_CONTROLLER.createUser);
USER_ROUTE.put("/:id", USER_CONTROLLER.updateUser);
USER_ROUTE.delete("/:id", USER_CONTROLLER.deleteUser);
module.exports = USER_ROUTE;
