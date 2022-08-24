import React from "react";
import {
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getTests } from "../Api/api";

export const TableComp = () => {
  const query = useQuery(["Tests"], getTests);
  const tableData = query.data
  const tableContainer = {
    marginTop: "45px"
  }
  return (
    <>
      <TableContainer component={Paper} sx={tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name of test</TableCell>
              <TableCell>Application type</TableCell>
              <TableCell>Enviroment</TableCell>
              <TableCell>Start time</TableCell>
              <TableCell>Notification</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data, index) => {
                return (
                    <TableRow key={index} sx={{"&:last-child td &:last-child th": {border: 0},}}>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.type}</TableCell>
                        <TableCell>{data.enviroment}</TableCell>
                        <TableCell>{data.starttime}</TableCell>
                        <TableCell>{data.notification}</TableCell>
                        <TableCell>{data.status}</TableCell>
                        <TableCell>{data.action}</TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
