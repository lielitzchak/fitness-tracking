const ReportRoute = require("express").Router();
const ReportController = require("../Controllers/Report-controller");

ReportRoute.get("/", ReportController.getAllReports);
ReportRoute.get("/:id", ReportController.getReportById);
ReportRoute.post("/", ReportController.createReport);
ReportRoute.put("/:id", ReportController.updateReport);
ReportRoute.delete("/:id", ReportController.deleteReport);
module.exports = ReportRoute;
