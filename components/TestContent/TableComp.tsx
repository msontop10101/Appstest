import React, { useState } from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useQuery } from "@tanstack/react-query";
import { getTests } from "../Api/api";
import TestPagination from "./TestPagination";

export const TableComp = () => {
  const query = useQuery(["Tests"], getTests);
  const tableData = query.data;
  const [tests, setTests] = useState(tableData);
  const [page, setPage] = useState(1);
  const [testsPerPage, setTestsPerPage] = useState(6);
  const lastTestId = page * testsPerPage;
  const firstTestId = lastTestId - testsPerPage;
  const shownTests = tableData?.slice(firstTestId, lastTestId);
  const testsLength = tableData?.length;
  const paginate = (pageNum: number) => setPage(pageNum);
  const tableContainer = {
    marginTop: "45px",
  };
  const tableHeadRow = {
    borderBottom: "2px solid #80808052",
    boxShadow: "5px 10px #8080800f",
    backgroundColor: "#d1d0d017",
  };
  const cellBoxStyle = {
    display: "flex",
    textAlign: "center",
  };
  const infoStyle = {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "14px",
  };
  const visibleStyle = {
    backgroundColor: "rgba(17, 42, 99, 0.1)",
    width: "35px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  };
  return (
    <>
      <TableContainer component={Paper} sx={tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={tableHeadRow}>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Name of test</Typography> <ArrowDropDownIcon />
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
                  <Typography>Enviroment</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Start time</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Notification</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Status</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={cellBoxStyle}>
                  <Typography>Action</Typography> <ArrowDropDownIcon />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shownTests?.map((data: any, index: number) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Box>
                      <Typography>{data.name}</Typography>
                      <Typography sx={infoStyle}>{data.desc}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {data.type == "Android" ? (
                      <AdbIcon />
                    ) : data.type == "IOS" ? (
                      <AppleIcon />
                    ) : data.type == "Web" ? (
                      <LanguageIcon />
                    ) : (
                      data.type
                    )}
                  </TableCell>
                  <TableCell>{data.enviroment}</TableCell>
                  <TableCell>{data.starttime}</TableCell>
                  <TableCell>{data.notification}</TableCell>
                  <TableCell>
                    {data.status == "Pending" ? (
                      <Box sx={cellBoxStyle}>
                        <FiberManualRecordIcon style={{ fill: "#EC8A00" }} />
                        <Typography sx={{ color: "#EC8A00" }}>
                          Pending
                        </Typography>
                      </Box>
                    ) : data.status == "Inprogress" ? (
                      <Box sx={cellBoxStyle}>
                        <FiberManualRecordIcon style={{ fill: "#0067DC" }} />
                        <Typography sx={{ color: "#0067DC" }}>
                          In Progress
                        </Typography>
                      </Box>
                    ) : data.status == "Completed" ? (
                      <Box sx={cellBoxStyle}>
                        <FiberManualRecordIcon color="primary" />
                        <Typography color="primary">Completed</Typography>
                      </Box>
                    ) : (
                      data.status
                    )}
                  </TableCell>
                  <TableCell>
                    {data.action.toLowerCase() == "visible" && (
                      <Box sx={visibleStyle}>
                        <VisibilityIcon
                          style={{ fill: "rgba(17, 42, 99, 0.8)" }}
                        />
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TestPagination
        testsPerPage={testsPerPage}
        totalTestsOnPage={testsLength}
        paginate={paginate}
        page={page}
      />
    </>
  );
};
