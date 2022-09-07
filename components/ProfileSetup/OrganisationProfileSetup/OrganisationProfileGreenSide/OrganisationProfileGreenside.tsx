import React from "react";
import Styles from "./OPGreenSide.module.css";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material"

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
  const container = {
    backgroundColor: "#00690B",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
}
const content = {
    width: "70%"
}
  return (
    <>
      <Box sx={container}>
        <Box sx={content}>
          <Typography sx={header}>Setup your organization profile</Typography>
          <Typography sx={msg}>
            Let&apos;s get to know more about your ogranization and also get
            started with AppsTest
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default OPGreenSide;
