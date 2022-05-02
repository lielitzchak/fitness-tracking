const recipeModel = require("../Models/recipe-model");

module.exports = {
  getAllRecipe: (request, response) => {
    recipeModel
      .find()
      .then((data) => {
        data.length == 0
          ? response.status(404).json({ message: "No recipe found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(501).json({
          message: "Error",
          error: err,
        });
      });
  },
  getRecipeById: (request, response) => {},
  createRecipe: (request, response) => {},
  updateRecipe: (request, response) => {},
  deleteRecipe: (request, response) => {},
};
