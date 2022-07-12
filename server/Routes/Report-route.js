const REPORT_ROUTE = require("express").Router();
const REPORT_CONTROLLER = require("../Controllers/Report-controller");

REPORT_ROUTE.get("/", REPORT_CONTROLLER.GetAllReports);
REPORT_ROUTE.get("/:id", REPORT_CONTROLLER.GetReportById);
REPORT_ROUTE.post("/", REPORT_CONTROLLER.CreateReport);
REPORT_ROUTE.put("/:id", REPORT_CONTROLLER.UpdateReport);
REPORT_ROUTE.delete("/:id", REPORT_CONTROLLER.DeleteReport);
module.exports = REPORT_ROUTE;
