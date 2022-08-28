import React, { useState } from "react";
import Header from "./Header";
import { Box, Typography } from "@mui/material";
import DashDrawer from "../DashDrawer/DashDrawer";
import Conditions from "./Conditions";
import AccessCredentials from "./AccessCredentials";
import Goat from "./Goat";
import BugList from "../BugList/BugList";
import Communication from "../Communication/Communication";

const TestDetailsComp = () => {
  const [page, setPage] = useState("");
  const getPage = (val: any) => {
    setPage(val);
  };
  const leftSide = {
    width: "60%",
  };

  return (
    <>
      <DashDrawer>
        <Box>
          <Header getPage={getPage} />
          {page == "overview" ? (
            <Box>
              <Conditions />
              <Box sx={leftSide}>
                <AccessCredentials />
                <Goat />
              </Box>
            </Box>
          ) : page == "bugList" ? (
            <BugList />
          ) : page == "communication" ? (
            <Communication />
          ) : (
            <Typography>Page not found!</Typography>
          )}
        </Box>
      </DashDrawer>
    </>
  );
};

export default TestDetailsComp;
