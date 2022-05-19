import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetAllReports } from "../../../service/Report-service";
import { Link } from "react-router-dom";

const Report = (): JSX.Element => {
  const [rows, setRows]: any = useState();
  useEffect(() => {
    GetAllReports().then((response) => {
      setRows(response);
      console.log(rows);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Link to="/report/add-report">
        <button>Add Report</button>
      </Link>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>there is no date in report</caption>
        <TableHead>
          <TableRow>
            <TableCell>date</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>weight</TableCell>
            <TableCell>RightHand</TableCell>
            <TableCell>Left Hand</TableCell>
            <TableCell>Right Leg</TableCell>
            <TableCell>Left Leg</TableCell>
            <TableCell>belly</TableCell>
            <TableCell>chest</TableCell>
            <TableCell>buttock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Report;
