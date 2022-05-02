const recipeRouter = require("express").Router();
const trainingController = require("../Controllers/Recipe-controller");

recipeRouter.get("/", trainingController.getAllRecipe);
recipeRouter.get("/:id", trainingController.getRecipeById);
recipeRouter.post("/", trainingController.createRecipe);
recipeRouter.put("/:id", trainingController.updateRecipe);
recipeRouter.delete("/:id", trainingController.deleteRecipe);
module.exports = recipeRouter;
