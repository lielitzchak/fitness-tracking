 const ReportModel = require("../Models/Report-model");
module.exports = {
  getAllReports: (request, response) => {
    ReportModel.find()
      .then((data) => {
        data.length == 0
          ? response.status(404).json({ message: "No Reports found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  getReportById: (request, response) => {
    ReportModel.findById(request.params.id)
      .then((data) => {
        if (data == null || data == undefined || data == "") {
          return response.status(404).json({ message: "No Report found" });
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
  createReport: (request, response) => {
    ReportModel.create(request.body)
      .then((data) => response.status(201).json(data))
      .catch((err) => response.status(500).json({ message: err }));
  },
  updateReport: (request, response) => {
    ReportModel.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    })
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No Report found" })
          : response.status(201).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  deleteReport: (request, response) => {
    ReportModel.findByIdAndDelete(request.params.id)
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No Report found" })
          : response.status(201).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
};
