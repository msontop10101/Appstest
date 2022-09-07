import React from "react";
import ResetPasswordFrom from "../components/LoginScreens/ResetPassword/RestPasswordForm/RestPasswordForm";
import LoginGreenSide from "../components/LoginScreens/Login/LoginGreenSide/LoginGreenSide";
import WhiteMobileBackground from "../components/General/MobileBackground/WhiteMobileBackground";
import {Box} from "@mui/material"

const ResetPassword = () => {
  const container = {
    display: {
      sm: "flex",
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
        <LoginGreenSide />
        <ResetPasswordFrom />
      </Box>
      <Box sx={mobileContainer}>
        <WhiteMobileBackground>
          <>
            <LoginGreenSide />
            <ResetPasswordFrom />
          </>
        </WhiteMobileBackground>
      </Box>
    </>
  );
}

export default ResetPassword;
