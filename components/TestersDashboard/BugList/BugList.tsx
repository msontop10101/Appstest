import React from "react";
// import from "./BugList.module.css";
import { useQuery } from "@tanstack/react-query";
import { getBugLists } from "../../Api/api";
import { Typography, Box } from "@mui/material";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import Header from "./Header";

const BugList = () => {
  const query = useQuery(["bugs"], getBugLists);
  const tableData = query.data;
  const bgColorSwitch = (sev: string) => {
    switch (sev) {
      case "critical":
        return "#ff00005c";
        break; 
      case "high":
        return "#ff00005c";
        break;
      case "approved":
        return "#00800059";
        break;
      case "declined":
        return "#ff00005c";
        break;
      case "inReview":
        return "#0000ff59";
        break;
      default:
        return "#0000ff59";
        break;
    }
  };
  const colorSwitch = (sev: string) => {
    switch (sev) {
      case "critical":
        return "red";
        break;
      case "approved":
        return "green";
        break;
      case "declined":
        return "red";
        break;
      case "inReview":
        return "blue";
        break;
      case "high":
        return "red";
        break;
      default:
        return "blue";
        break;
    }
  };
  const servColorSwitch = (sev:string) => {
    switch(sev) {
      case "critical":
        return "red";
        break;
      case "high":
        return "orange";
        break;
      case "medium":
        return "yellow";
        break;
      case "low":
        return "blue";
        break;
    }
  }
  return (
    <>
      <Header />
      <table className="tableStyle">
        <tr>
          <th>
            <PestControlOutlinedIcon className="iconStyle" />
          </th>
          <th>ID</th>
          <th>Bug title</th>
          <th>Status</th>
          <th>Feature</th>
          <th>Time</th>
          <th>Severity</th>
        </tr>
        {tableData.map((data: any, index: number) => {
          const { id, title, status, features, test, severity } = data;
          return (
            <tr key={index}>
              <td>
                <PestControlOutlinedIcon
                  style={{
                    backgroundColor: bgColorSwitch(severity),
                    color: colorSwitch(severity),
                  }}
                  className="listedIcons"
                />
              </td>
              <td>{id}</td>
              <td style={{ width: "30%" }}>{title}</td>
              <td>
                {status == "approved" ? (
                  <Typography
                    style={{
                      color: colorSwitch(status),
                      backgroundColor: bgColorSwitch(status),
                    }}
                    className="listedIcons"
                  >
                    Approved
                  </Typography>
                ) : status == "declined" ? (
                  <Typography
                    style={{
                      color: colorSwitch(status),
                      backgroundColor: bgColorSwitch(status),
                    }}
                    className="listedIcons"
                  >
                    Declined
                  </Typography>
                ) : status == "inReview" ? (
                  <Typography
                    style={{
                      color: colorSwitch(status),
                      backgroundColor: bgColorSwitch(status),
                    }}
                    className="listedIcons"
                  >
                    In review
                  </Typography>
                ) : status == "pending" ? (
                  <Typography>Pending</Typography>
                ) : (
                  status
                )}
              </td>
              <td>{features}</td>
              <td>{test}</td>
              <td>
                {severity == "critical" ? (
                  <Box className="serv">
                    <RadioButtonCheckedIcon style={{color: servColorSwitch(severity), marginRight: "5px"}}/>
                  <Typography>Critical</Typography>
                  </Box>
                ) : severity == "high" ? (
                  <Box className="serv">
                    <RadioButtonCheckedIcon style={{color: servColorSwitch(severity), marginRight: "5px"}}/>
                  <Typography>High</Typography>
                  </Box>
                ) : severity == "medium" ? (
                  <Box className="serv">
                    <RadioButtonCheckedIcon style={{color: servColorSwitch(severity), marginRight: "5px"}}/>
                  <Typography>Medium</Typography>
                  </Box>
                ) : severity == "low" ? (
                  <Box className="serv">
                    <RadioButtonCheckedIcon style={{color: servColorSwitch(severity), marginRight: "5px"}}/>
                  <Typography>Low</Typography>
                  </Box>
                ) : null}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default BugList;
