import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { reportService } from "../../../service/Report-service";
const ReportComponent = (): JSX.Element => {
  const [REPORTS, SET_REPORTS]: any = useState([]);

  useEffect(() => {
    reportService
      .GetAllReports()
      .then((responseFromServer: any) => {
        console.log(responseFromServer);
        if (CheckIfDataIsEmpty(responseFromServer))
          return SET_REPORTS(responseFromServer);
        return SET_REPORTS("there is no data");
      })
      .catch((error) => console.log(error));
  }, []);
  const CheckIfDataIsEmpty: any = (DataToCheck: any) => {
    return DataToCheck != [] || DataToCheck != undefined;
  };
  const SortBy = (key: string) => {
    REPORTS.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
    console.log(REPORTS);
  };
  const DeleteReportOnClick = (reportId: any) => {
    reportService
      .DeleteReport(reportId)
      .then((responseFromServer: any) => console.log(responseFromServer))
      .catch((error: any) => console.log(error));
  };
  const EditReportOnClick = (reportId: string, newReport: any) => {
    reportService
      .PutReport(reportId, newReport)
      .then((responseFromServer: Response) => console.log(responseFromServer))
      .catch((errorFromServer: Response) => console.log(errorFromServer));
  };

  return (
    <div className="report">
      <TableContainer component={Paper}>
        <Link to="/report/add-report">
          <button>Add Report</button>
        </Link>
        <button onClick={() => SortBy("Date")}>sort by date</button>
        <button onClick={() => SortBy("buttock")}>sort by butt</button>
        <button onClick={() => SortBy("weight")}>sort by weight</button>

        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">weight</TableCell>
              <TableCell align="center">RightHand</TableCell>
              <TableCell align="center">Left Hand</TableCell>
              <TableCell align="center">Right Leg</TableCell>
              <TableCell align="center">Left Leg</TableCell>
              <TableCell align="center">belly</TableCell>
              <TableCell align="center">chest</TableCell>
              <TableCell align="center">buttock</TableCell>
              <TableCell align="center">delete this report</TableCell>
              <TableCell align="center">edit this report</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {REPORTS.map((row: any) => (
              <TableRow key={row._id}>
                <TableCell align="center">{row.Date.slice(0, 10)}</TableCell>
                <TableCell align="center">{row.weight}</TableCell>
                <TableCell align="center">{row.RightHand}</TableCell>
                <TableCell align="center">{row.LeftHand}</TableCell>
                <TableCell align="center">{row.RightLeg}</TableCell>
                <TableCell align="center">{row.LeftLeg}</TableCell>
                <TableCell align="center">{row.LeftLeg}</TableCell>
                <TableCell align="center">{row.chest}</TableCell>
                <TableCell align="center">{row.buttock}</TableCell>
                <TableCell
                  align="center"
                  onClick={() => DeleteReportOnClick(row._id)}
                >
                  <img
                    className="change-icon"
                    src="https://cdn1.iconfinder.com/data/icons/office-322/24/delete-recycle-bin-trash-garbage-256.png"
                    alt="delete-icon"
                  />
                </TableCell>
                <TableCell
                  align="center"
                  onClick={() => EditReportOnClick(row._id, REPORTS)}
                >
                  <img
                    className="change-icon"
                    src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-5/32/development_web_design_edit_pencil_website-256.png"
                    alt=""
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ReportComponent;
