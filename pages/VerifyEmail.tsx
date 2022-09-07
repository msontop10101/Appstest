import React from "react";
import VerifyEmailBox from "../components/LoginScreens/VerifyEmail/VerifyEmailBox/VerifyEmailBox";
import MobileEmailBg from "../components/General/MobileEmailBackground/MobileEmailBackground";
import {Box} from "@mui/material"

function VerifyEmailComp() {
  const container = {
    display: {
      sm: "block",
      xs: "none"
    },
    height: "100vh",
}
const mobileContainer = {
    display: {
      sm: "none",
      xs: "block"
    },
}

  return (
    <>
      <Box sx={container}>
        <VerifyEmailBox />
      </Box>
      <Box sx={mobileContainer}>
        <MobileEmailBg>
          <VerifyEmailBox />
        </MobileEmailBg>
      </Box>
    </>
  );
}

export default VerifyEmailComp;
