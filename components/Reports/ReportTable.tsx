import React from "react";
import {
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import { testReport } from "../../files/data";

const ReportTable = () => {
  const cellBoxStyle = {
    display: "flex",
    textAlign: "center",
  };
  const container = {
    mt: 5,
  };
  const descStyle = {
    color: "#4CAF50",
    fontSize: "14px",
    marginTop: "2px",
  };
  const tableStyle = {
    borderBottom: "2px solid #80808052",
    boxShadow: "5px 10px #8080800f",
    backgroundColor: "#d1d0d017",
  };
  const tableRowStyle = {
    margin: "10px 0px 10px 0px",
  };
  const statusColor = (status: string) => {
    switch (status) {
      case "Passed":
        return "#4CAF50";
        break;
      case "Failed":
        return "red";
      default:
        break;
    }
  };
  return (
    <>
      <TableContainer component={Paper} sx={container}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={tableStyle}>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Test name</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Application type</Typography>{" "}
                  <ArrowDropDownIcon />
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Total Duration</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Status</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testReport.map((report, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td &:last-child th": { border: 0 },
                    borderLeft: "4px solid",
                    borderColor: statusColor(report.status),
                    borderBottom: "2px solid #80808052",
                    boxShadow: "5px 10px #8080800f",
                  }}
                >
                  <TableCell>
                    <Typography>{report.name}</Typography>
                    <Typography sx={descStyle}>{report.desc}</Typography>
                  </TableCell>
                  <TableCell>
                    <LanguageIcon />
                  </TableCell>
                  <TableCell>
                    <Typography>{report.duration}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{report.status}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ReportTable;
