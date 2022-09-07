import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import TeamTable from "./TeamTable";
import SideTestsInfo from "./SideTestsInfo";
import DashDrawer from "../Dashboard/DashboardDrawer/DashboardDrawer";

const TeamComp = () => {
  const container = {
    display: "flex",
    justifyContent: "space-between",
  };
  return ( 
    <>
      <DashDrawer>
        <Box>
          <Header />
          <Box sx={container}>
            <Box sx={{width: "70%"}}>
              <TeamTable />
            </Box>
            <Box sx={{width: "30%", display: "flex", justifyContent:"right"}}>
              <SideTestsInfo />
            </Box>
          </Box>
        </Box>
      </DashDrawer>
    </>
  );
};

export default TeamComp;
