import React, { useContext } from "react";
import { Typography } from "@mui/material";
import Styles from "./AndroidStepOne.module.css";
import StepTwo from "../StepTwo";
import { navContext } from "../../CreateTestModal/CreateTestModal";

const AndroidStepOne = (props: any) => {
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
      </div>
      <div>
        <StepTwo />
      </div>
    </>
  );
};

export default AndroidStepOne;
