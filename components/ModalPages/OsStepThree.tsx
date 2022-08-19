import React, { useContext } from "react";
import { Typography } from "@mui/material";
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
  const nav = useContext(navContext);
  return (
    <>
      <div className={Styles.pageText}>
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
      </div>
      <div>
        {nav == "Web" ? (
          <WebStepThree />
        ) : nav == "API" ? (
          <ApiStepThree />
        ) : (
          <StepThree />
        )}
      </div>
    </>
  );
};

export default OsStepThree;
