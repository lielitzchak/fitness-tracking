import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteReport, GetAllReports } from "../../../service/Report-service";
import { Link } from "react-router-dom";

const ReportComponent = (): JSX.Element => {
  const [rows, setRows]: any = useState([]);
  useEffect(() => {
    GetAllReports()
      .then((response) => {
        response.length > 0 ? setRows(response) : setRows("there is no data");
      })
      .then(() => console.log(rows))
      .catch((err) => console.log(err));
  }, []);
  const sortBy = (key: string) => {
    rows.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
    console.log(rows);
  };
  const deleteReport = (id: any) => {
    DeleteReport(id)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <TableContainer component={Paper}>
      <Link to="/report/add-report">
        <button>Add Report</button>
      </Link>
      <button onClick={() => sortBy("Date")}>sort by date</button>
      <button onClick={() => sortBy("buttock")}>sort by butt</button>
      <button onClick={() => sortBy("weight")}>sort by weight</button>

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
          {rows > "" || rows === [] || rows.length === 0 ? (
            <caption>there is no date in report</caption>
          ) : (
            rows.map((row: any) => (
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
                <TableCell align="center" onClick={() => deleteReport(row._id)}>
                  <img
                    className="change-icon"
                    src="https://cdn1.iconfinder.com/data/icons/office-322/24/delete-recycle-bin-trash-garbage-256.png"
                    alt="delete-icon"
                  />
                </TableCell>
                <TableCell align="center" onClick={() => deleteReport(row._id)}>
                  <img
                    className="change-icon"
                    src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-5/32/development_web_design_edit_pencil_website-256.png"
                    alt=""
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ReportComponent;
