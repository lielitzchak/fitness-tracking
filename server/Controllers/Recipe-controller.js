const recipeModel = require("../Models/Recipe-model");
module.exports = {
  getAllRecipes: (request, response) => {
    recipeModel
      .find()
      .then((data) => {
        data.length == 0
          ? response.status(404).json({ message: "No Recipes found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  getRecipeById: (request, response) => {
    recipeModel
      .findById(request.params.id)
      .then((data) => {
        if (data == null || data == undefined || data == "") {
          return response.status(404).json({ message: "No Recipe found" });
        }
        return response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  createRecipe: (request, response) => {
    recipeModel
      .create(request.body)
      .then((data) => response.status(200).json(data))
      .catch((err) => response.status(500).json({ message: err }));
  },
  updateRecipe: (request, response) => {
    recipeModel
      .findByIdAndUpdate(request.params.id, request.body, {
        new: true,
      })
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No Recipe found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  deleteRecipe: (request, response) => {
    recipeModel
      .findByIdAndDelete(request.params.id)
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No Recipe found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
};
