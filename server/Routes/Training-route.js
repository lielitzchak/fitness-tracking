const TRAINING_ROUTER = require("express").Router();
const TRAINING_CONTROLLER = require("../Controllers/Training-controller");

TRAINING_ROUTER.get("/", TRAINING_CONTROLLER.GetAllTraining);
TRAINING_ROUTER.get("/:id", TRAINING_CONTROLLER.GetTrainingById);
TRAINING_ROUTER.post("/", TRAINING_CONTROLLER.CreateTraining);
TRAINING_ROUTER.put("/:id", TRAINING_CONTROLLER.UpdateTraining);
TRAINING_ROUTER.delete("/:id", TRAINING_CONTROLLER.DeleteTraining);
module.exports = TRAINING_ROUTER;
