const ReportModel = require("../Models/Report-model");
module.exports = {
  GetAllReports: (requestFromUser, responseFromServer) => {
    ReportModel.find()
      .then((dataFromClient) => {
        dataFromClient.length == 0
          ? responseFromServer.status(404).json({ Message: "No Reports found" })
          : responseFromServer.status(200).json(dataFromClient);
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
      .then((dataFromClient) => {
        if (CheckIfUserExists(dataFromClient))
          return responseFromServer
            .status(404)
            .json({ Message: "No Report found" });
        return responseFromServer.status(200).json(dataFromClient);
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
      .then((dataFromClient) =>
        responseFromServer.status(201).json(dataFromClient)
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
      .then((dataFromClient) => {
        if (dataFromClient == null || dataFromClient == undefined)
          return responseFromServer
            .status(404)
            .json({ Message: "No Report found" });
        return responseFromServer.status(201).json(dataFromClient);
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
      .then((dataFromClient) => {
        if (CheckIfNullOrUndefined(dataFromClient))
          return responseFromServer
            .status(404)
            .json({ Message: "No Report found" });
        return responseFromServer.status(201).json(dataFromClient);
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
  return dataToCheck != null || dataToCheck != undefined;
}
