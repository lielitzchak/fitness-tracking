const TRAINING_PROGRAM_MODEL = require("../Models/Training-Program-model");

module.exports = {
  GetAllTrainingProgram: (requestFromUser, responseFromServer) => {
    TRAINING_PROGRAM_MODEL.find()
      .then((dataFromDB) => {
        if (CheckIfUserExists(dataFromDB))
          return responseFromServer
            .status(404)
            .json({ Message: "No Training program found" });
        return responseFromServer.status(200).json(dataFromDB);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  GetTrainingProgramById: (requestFromUser, responseFromServer) => {
    TRAINING_PROGRAM_MODEL.findById(requestFromUser.params.id)
      .then((dataFromDB) => {
        if (CheckIfUserExists(dataFromDB))
          return responseFromServer
            .status(404)
            .json({ Message: "No Gym report found" });
        return responseFromServer.status(200).json(dataFromDB);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  CreateTrainingProgram: (requestFromUser, responseFromServer) => {
    TRAINING_PROGRAM_MODEL.create(requestFromUser.body)
      .then((dataFromDB) => {
        responseFromServer.status(201).json(dataFromDB);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  UpdateTrainingProgram: (requestFromUser, responseFromServer) => {
    TRAINING_PROGRAM_MODEL.findByIdAndUpdate(
      requestFromUser.params.id,
      requestFromUser.body,
      { new: true }
    )
      .then((dataFromDB) => {
        if (dataFromDB == null || dataFromDB == undefined)
          return responseFromServer
            .status(404)
            .json({ Message: "No Gym report found" });
        return responseFromServer.status(201).json(dataFromDB);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  DeleteTrainingProgram: (requestFromUser, responseFromServer) => {
    TRAINING_PROGRAM_MODEL.findByIdAndDelete(requestFromUser.params.id)
      .then((dataFromDB) => {
        if (dataFromDB == null || dataFromDB == undefined)
          return responseFromServer
            .status(404)
            .json({ Message: "No Gym found" });
        return responseFromServer.status(200).json(dataFromDB);
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
  return (
    dataUser == null ||
    // dataUser == undefined ||
    // dataUser == "" ||
    dataUser === [] ||
    dataUser == {}
  );
}
