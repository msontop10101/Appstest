import React from "react";
import {Box,Typography} from "@mui/material"

const Section3 = () => {
  const sectionContainer = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
}
const headOne = {
    backgroundColor: "rgba(0, 105, 11, 0.05)",
    padding: "15px",
    borderRadius: "30px",
    color: "#00690B",
    fontWeight: "100",
} 
const headTwo = {
    fontWeight: "600",
    fontSize: {
      sm: "x-large",
      xs: "large"
    },
}
const sectionContent = {
    width: {
      sm: "40%",
      xs: "100%"
    },
}
  return (
    <>
      <Box sx={sectionContainer}>
        <Box sx={sectionContent}>
          <Typography sx={headOne}>SHIP QUALITY PRODUCT FASTER</Typography>
          <Typography sx={headTwo}>
            Get onboarded in minutes, and get test results in hours not in days
            or months
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Section3;
