import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import Styles from "./Android/AndroidStepOne.module.css";
import StepThree from "./StepThree";
import WebStepThree from "./WebStepThree";
import ApiStepThree from "./ApiStepThree";
import { navContext } from "../CreateTestModal/CreateTestModal";

const OsStepThree = (props: any) => {
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
        {nav == "IOS" ? (
          <Typography sx={headerText}>IOS Application Details</Typography>
        ) : nav == "Web" ? (
          <Typography sx={headerText}>Web Application Details</Typography>
        ) : nav == "API" ? (
          <Typography sx={headerText}>API Application Details</Typography>
        ) : nav == "Android" ? (
          <Typography sx={headerText}>Android Application Details</Typography>
        ) : null}
        {nav == "Web" || nav == "API" ? (
          <Typography sx={subHeaderText} color="text.secondary">
            To add a new app to the testing list, simply add it&apos;s details
            below
          </Typography>
        ) : (
          <Typography sx={subHeaderText} color="text.secondary">
            You can now proceed to add the application details by uploading an
            APK file
          </Typography>
        )}
      </Box>
      <Box>
        {nav == "Web" ? (
          <WebStepThree />
        ) : nav == "API" ? (
          <ApiStepThree />
        ) : (
          <StepThree />
        )}
      </Box>
    </>
  );
};

export default OsStepThree;
