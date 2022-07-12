const RECIPE_ROUTE = require("express").Router();
const RECIPE_CONTROLLER = require("../Controllers/Recipe-controller");

RECIPE_ROUTE.get("/", RECIPE_CONTROLLER.GetAllRecipes);
RECIPE_ROUTE.get("/:id",RECIPE_CONTROLLER.GetRecipeById);
RECIPE_ROUTE.post("/", RECIPE_CONTROLLER.CreateRecipe);
RECIPE_ROUTE.put("/:id", RECIPE_CONTROLLER.UpdateRecipe);
RECIPE_ROUTE.delete("/:id", RECIPE_CONTROLLER.DeleteRecipe);
module.exports = RECIPE_ROUTE;
