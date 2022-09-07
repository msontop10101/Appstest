import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import StepTwo from "./StepTwo";
import { navContext } from "../CreateTestModal/CreateTestModal";

const AndroidStepOne = (props: any) => {
  const headerText = {
    fontWeight: "bold",
  };
  const subHeaderText = {
    fontSize: "14px",
  };
  const pageText = {
    margin: "25px 0px 25px 0px",
} 
  const nav = useContext(navContext);
  return (
    <>
      <Box sx={pageText}>
        {nav == "Android" ? (
          <Typography sx={headerText}>Android Application Details</Typography>
        ) : nav == "IOS" ? (
          <Typography sx={headerText}>IOS Application Details</Typography>
        ) : nav == "Web" ? (
          <Typography sx={headerText}>Web Application Details</Typography>
        ) : nav == "API" ? (
          <Typography sx={headerText}>API Application Details</Typography>
        ) : null}
        <Typography sx={subHeaderText} color="text.secondary">
          Provide your test with a meaningful name and detail to help your
          colleges understand the purpose of the test
        </Typography>
      </Box>
      <Box>
        <StepTwo />
      </Box>
    </>
  );
};

export default AndroidStepOne;
