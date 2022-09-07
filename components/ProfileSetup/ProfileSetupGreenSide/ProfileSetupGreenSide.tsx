import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"

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
  const container = {
    backgroundColor: "#00690B",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
}
const content = {
    width: "70%",
}
  return (
    <>
      <Box sx={container}>
        <Box sx={content}>
          <Typography sx={header}>Setup a profile</Typography>
          <Typography sx={msg}>
            Please provide every neccessary credentials so as to setup your
            account
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default PSetupGreenSide;
