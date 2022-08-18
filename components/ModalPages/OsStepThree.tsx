import React from "react";
import { Typography } from "@mui/material";
import Styles from "./Android/AndroidStepOne.module.css";
import StepThree from "./StepThree";

const OsStepThree = (props: any) => {
  const headerText = {
    fontWeight: "bold",
  };
  const subHeaderText = {
    fontSize: "14px",
  };
  return (
    <>
      <div className={Styles.pageText}>
        {props.nav == "Android" ? (
          <Typography sx={headerText}>Android Application Details</Typography>
        ) : props.nav == "IOS" ? (
          <Typography sx={headerText}>IOS Application Details</Typography>
        ) : props.nav == "Web" ? (
          <Typography sx={headerText}>Web Application Details</Typography>
        ) : props.nav == "API" ? (
          <Typography sx={headerText}>API Application Details</Typography>
        ) : null}
        <Typography sx={subHeaderText} color="text.secondary">
          You can now proceed to add the application details by uploading an APK
          file
        </Typography>
      </div>
      <div>
        <StepThree nav={props.nav} />
      </div>
    </>
  );
};

export default OsStepThree;
