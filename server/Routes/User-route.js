const UserRouter = require("express").Router();
const UserController = require("../Controllers/User-controller");
UserRouter.get("/", UserController.getAllUsers); //! this request is available only for admin.
UserRouter.get("/:id", UserController.getUserById); //! when the user try to get his own profile , and logged in.
UserRouter.get("/:Email/:Password", UserController.getUserByEmail); //! when the user try to get his own profile , and logged in.
UserRouter.post("/", UserController.createUser); //!same as the register
UserRouter.put("/:id", UserController.updateUser); //! to your profile update.
UserRouter.delete("/:id", UserController.deleteUser); //! to delete your profile.
module.exports = UserRouter;
