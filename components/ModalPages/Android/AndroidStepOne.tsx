import React from "react";
import { Typography } from "@mui/material";
import Styles from "./AndroidStepOne.module.css";
import ChooseOs from "../ChooseOs";
import StepTwo from "../StepTwo";

const AndroidStepOne = () => {
  const headerText = {
    fontWeight: "bold",
  };
  const subHeaderText = {
    fontSize: "14px",
  };
  return (
    <>
      <div className={Styles.pageText}>
        <Typography sx={headerText}>
          Select platform and test application
        </Typography>
        <Typography sx={subHeaderText} color="text.secondary">
          Please choose the device platform you&apos;ll be testing on
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
