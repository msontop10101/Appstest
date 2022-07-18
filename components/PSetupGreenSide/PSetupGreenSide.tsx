import React from "react";
import Styles from "./PSetupGreenSide.module.css";
import Typography from "@mui/material/Typography";

function PSetupGreenSide() {
  const header = {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    margin: "10px 0px 10px 0px",
  };
  const msg = {
    fontSize: 14,
    color: "white",
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <Typography sx={header}>Setup a profile</Typography>
          <Typography sx={msg}>
            Please provide every neccessary credentials so as to setup your
            account
          </Typography>
        </div>
      </div>
    </>
  );
}

export default PSetupGreenSide;
