const TRAINING_MODEL = require("../Models/Training-model");
module.exports = {
  GetAllTraining: (requestFromUser, responseFromServer) => {
    TRAINING_MODEL.find()
      .then((dataFromServer) => {
        if (CheckIfUserExists(dataFromServer) && dataFromServer.length == 0)
          return responseFromServer
            .status(404)
            .json({ Message: "No training found" });
        return responseFromServer.status(200).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  GetTrainingById: (requestFromUser, responseFromServer) => {
    TRAINING_MODEL.findById(requestFromUser.params.id)
      .then((dataFromUser) => {
        if (CheckIfUserExists(dataFromUser))
          return responseFromServer
            .status(404)
            .json({ Message: "No training found" });
        return responseFromServer.status(200).json(dataFromUser);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  CreateTraining: (requestFromUser, responseFromServer) => {
    TRAINING_MODEL.create(requestFromUser.body)
      .then((dataFromUser) => {
        responseFromServer.status(201).json(dataFromUser);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  UpdateTraining: (requestFromUser, responseFromServer) => {
    TRAINING_MODEL.findByIdAndUpdate(
      requestFromUser.params.id,
      requestFromUser.body,
      { new: true }
    )
      .then((dataFromUser) => {
        dataFromUser == null || dataFromUser == undefined
          ? responseFromServer
              .status(404)
              .json({ Message: "No training found" })
          : responseFromServer.status(201).json(dataFromUser);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  DeleteTraining: (requestFromUser, responseFromServer) => {
    TRAINING_MODEL.findByIdAndDelete(requestFromUser.params.id)
      .then((dataFromServer) => {
        dataFromServer == null || dataFromServer == undefined
          ? responseFromServer
              .status(404)
              .json({ Message: "No training found" })
          : responseFromServer.status(200).json(dataFromServer);
        responseFromServer.status(200).json(dataFromServer);
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
