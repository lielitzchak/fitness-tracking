const trainingRoute = require("express").Router();
const trainingController = require("../Controllers/Training");

trainingRoute.get("/", trainingController.getAllTraining);
trainingRoute.get("/:id", trainingController.getTrainingById);
trainingRoute.post("/", trainingController.createTraining);
trainingRoute.put("/:id", trainingController.updateTraining);
trainingRoute.delete("/:id", trainingController.deleteTraining);
module.exports = trainingRoute;
