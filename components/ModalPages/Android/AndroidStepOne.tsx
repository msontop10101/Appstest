import React from "react";
import { Typography } from "@mui/material";
import Styles from "./AndroidStepOne.module.css";
import ChooseOs from "../ChooseOs";
import StepTwo from "../StepTwo";

const AndroidStepOne = (props: any) => {
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
          Provide your test with a meaningful name and detail to help your
          colleges understand the purpose of the test
        </Typography>
      </div>
      <div>
        {/* <ChooseOs /> */}
        <StepTwo />
      </div>
    </>
  );
};

export default AndroidStepOne;
