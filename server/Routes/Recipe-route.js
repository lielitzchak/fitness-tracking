const recipeRouter = require("express").Router();
const recipeController = require("../Controllers/Recipe-controller");

recipeRouter.get("/", recipeController.getAllRecipes);
recipeRouter.get("/:id",recipeController.getRecipeById);
recipeRouter.post("/", recipeController.createRecipe);
recipeRouter.put("/:id", recipeController.updateRecipe);
recipeRouter.delete("/:id", recipeController.deleteRecipe);
module.exports = recipeRouter;
