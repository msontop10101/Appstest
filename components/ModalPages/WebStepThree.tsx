import React from "react";
import { Typography } from "@mui/material";
import Styles from "./WebStepThree.module.css";

const WebStepThree = () => {
  const label = {
    marginBottom: "5px",
  };
  return (
    <>
      <div className={Styles.enterNameContainer}>
        <Typography sx={label}>Test Credentials</Typography>
        <input className={Styles.inputField} />
      </div>
    </>
  );
};

export default WebStepThree;
