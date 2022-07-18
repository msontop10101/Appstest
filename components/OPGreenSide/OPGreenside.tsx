import React from "react";
import Styles from "./OPGreenSide.module.css";
import Typography from "@mui/material/Typography";

function OPGreenSide() {
  const header = {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
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
          <Typography sx={header}>Setup your organization profile</Typography>
          <Typography sx={msg}>
            Let&apos;s get to know more about your ogranization and also get
            started with AppsTest
          </Typography>
        </div>
      </div>
    </>
  );
}

export default OPGreenSide;
