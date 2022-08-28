import React from "react";
import Styles from "./BugList.module.css";
import { useQuery } from "@tanstack/react-query";
import { getBugLists } from "../Api/api";
import { Typography } from "@mui/material";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import Header from "./Header"

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
      case "high":
        return "red";
        break;
      default:
        return "blue";
        break;
    }
  };
  return (
    <>
    <Header/>
      <table className={Styles.tableStyle}>
        <tr>
          <th>
            <PestControlOutlinedIcon className={Styles.iconStyle} />
          </th>
          <th>ID</th>
          <th>Bug title</th>
          <th>Status</th>
          <th>Feature</th>
          <th>Time</th>
          <th>Severity</th>
        </tr>
        {/* {tableData.map((data: any, index: number) => {
          const { id, title, status, features, test, severity } = data;
          return (
            <tr key={index}>
              <td>
                <PestControlOutlinedIcon
                  style={{
                    backgroundColor: bgColorSwitch(severity),
                    color: colorSwitch(severity),
                  }}
                  className={Styles.listedIcons}
                />
              </td>
              <td>{id}</td>
              <td style={{ width: "30%" }}>{title}</td>
              <td>
                {status == "approved" ? (
                  <Typography>Approved</Typography>
                ) : status == "declined" ? (
                  <Typography>Declined</Typography>
                ) : status == "inReview" ? (
                  <Typography>In review</Typography>
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
                  <Typography>Critical</Typography>
                ) : severity == "high" ? (
                  <Typography>High</Typography>
                ) : severity == "medium" ? (
                  <Typography>Medium</Typography>
                ) : severity == "low" ? (
                  <Typography>Low</Typography>
                ) : null}
              </td>
            </tr>
          );
        })} */}
      </table>
    </>
  );
};

export default BugList;
