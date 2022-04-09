const trainingModel = requestuire("../models/training");

module.exports = {
  getAllTraining: (request, response) => {
    trainingModel
      .find()
      .then((data) => {
        data.length == 0
          ? response.status(404).json({ message: "No training found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  getTrainingById: (request, response) => {
    trainingModel
      .findById(request.params.id)
      .then((data) => {
        if (data == null || data == undefined || data == "") {
          return response.status(404).json({ message: "No training found" });
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
  createTraining: (request, response) => {
    trainingModel
      .create(request.body)
      .then((data) => {
        response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  updateTraining: (request, response) => {
    trainingModel
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No training found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  deleteTraining: (request, response) => {
    trainingModel
      .findByIdAndDelete(request.params.id)
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No training found" })
          : response.status(200).json(data);
        response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  getTrainingByUserId: (request, response) => {
    trainingModel
      .find({ userId: request.params.id })
      .then((data) => {
        response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
};
