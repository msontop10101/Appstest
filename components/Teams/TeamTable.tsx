import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { teamData } from "../../files/data";
import { Box } from "@mui/material";

const TeamTable = () => {
  const cellBoxStyle = {
    display: "flex",
    textAlign: "center",
  };
  const addBorder = {
    borderLeft: "1px solid gray",
  };
  return (
    
    <>
      <table className="teamTableStyle">
          <thead>
          <tr>
            <th>S/N</th>
            <th>Team name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
          </thead>
        {teamData.map((data, index) => {
          return (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{data.name}</th>
              <th>{data.role}</th>
              <th>{data.status}</th>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default TeamTable;
