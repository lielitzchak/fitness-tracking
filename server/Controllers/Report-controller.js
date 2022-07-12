const ReportModel = require("../Models/Report-model");
module.exports = {
  GetAllReports: (requestFromUser, responseFromServer) => {
    ReportModel.find()
      .then((dataFromServer) => {
        dataFromServer.length == 0
          ? responseFromServer.status(404).json({ Message: "No Reports found" })
          : responseFromServer.status(200).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  GetReportById: (requestFromUser, responseFromServer) => {
    ReportModel.findById(requestFromUser.params.id)
      .then((dataFromServer) => {
        if (CheckIfUserExists(dataFromServer))
          return responseFromServer
            .status(404)
            .json({ Message: "No Report found" });
        return responseFromServer.status(200).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  CreateReport: (requestFromUser, responseFromServer) => {
    ReportModel.create(requestFromUser.body)
      .then((dataFromServer) =>
        responseFromServer.status(201).json(dataFromServer)
      )
      .catch((error) =>
        responseFromServer.status(500).json({ Message: error })
      );
  },
  UpdateReport: (requestFromUser, responseFromServer) => {
    ReportModel.findByIdAndUpdate(
      requestFromUser.params.id,
      requestFromUser.body,
      { new: true }
    )
      .then((dataFromServer) => {
        if (dataFromServer == null || dataFromServer == undefined)
          return responseFromServer
            .status(404)
            .json({ Message: "No Report found" });
        return responseFromServer.status(201).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  DeleteReport: (requestFromUser, responseFromServer) => {
    ReportModel.findByIdAndDelete(requestFromUser.params.id)
      .then((dataFromServer) => {
        if (CheckIfNullOrUndefined(dataFromServer))
          return responseFromServer
            .status(404)
            .json({ Message: "No Report found" });
        return responseFromServer.status(201).json(dataFromServer);
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