const recipeModel = require("../Models/Recipe-model");
module.exports = {
  GetAllRecipes: (requestFromUser, responseFromServer) => {
    recipeModel
      .find()
      .then((dataFromServer) => {
        if (CheckIfUserExists(dataFromServer) && dataFromServer.length == 0)
          return responseFromServer
            .status(404)
            .json({ Message: "No Recipes found" });
        return responseFromServer.status(200).json(dataFromServer);
      })
      .catch((err) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: err,
        });
      });
  },
  GetRecipeById: (requestFromUser, responseFromServer) => {
    recipeModel
      .findById(requestFromUser.params.id)
      .then((dataFromServer) => {
        if (CheckIfUserExists(dataFromServer))
          return responseFromServer
            .status(404)
            .json({ Message: "No Recipe found" });
        return responseFromServer.status(200).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  CreateRecipe: (requestFromUser, responseFromServer) => {
    recipeModel
      .create(requestFromUser.body)
      .then((dataFromServer) =>
        responseFromServer.status(201).json(dataFromServer)
      )
      .catch((error) =>
        responseFromServer.status(500).json({ Message: error })
      );
  },
  UpdateRecipe: (requestFromUser, responseFromServer) => {
    recipeModel
      .findByIdAndUpdate(requestFromUser.params.id, requestFromUser.body, {
        new: true,
      })
      .then((dataFromUser) => {
        if (CheckIfNullOrUndefined(dataFromUser))
          return responseFromServer
            .status(404)
            .json({ Message: "No Recipe found" });
        return responseFromServer.status(201).json(dataFromUser);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  DeleteRecipe: (requestFromUser, responseFromServer) => {
    recipeModel
      .findByIdAndDelete(requestFromUser.params.id)
      .then((dataFromServer) => {
        if (CheckIfNullOrUndefined(dataFromServer))
          return responseFromServer
            .status(404)
            .json({ Message: "No Recipe found" });
        return responseFromServer.status(200).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
};
function CheckIfUserExists(dataUser) {
  return dataUser == null || dataUser == undefined || dataUser == "";
}
function CheckIfNullOrUndefined(dataToCheck) {
  return dataFromServer == null || dataFromServer == undefined;
}
