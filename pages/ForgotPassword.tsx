import React from "react";
import ForgotPswdForm from "../components/LoginScreens/ForgotPassword/ForgotPswdForm/ForgotPswdForm";
import LoginGreenSide from "../components/LoginScreens/Login/LoginGreenSide/LoginGreenSide";
import WhiteMobileBackground from "../components/General/MobileBackground/WhiteMobileBackground";
import MobileLoginInfoSec from "../components/LoginScreens/Login/LoginInfoSec/MobileLoginInfoSec";

import { Box } from "@mui/material";

const ForgotPassWord = () => {
  const container = {
    display: {
      sm: "flex",
      xs: "none"
    },
    height: "100vh",
}

  return (
    <>
      <Box sx={container}>
        <LoginGreenSide />
        <ForgotPswdForm />
      </Box>
      <Box>
        <WhiteMobileBackground>
          <Box>
            <ForgotPswdForm />
            <MobileLoginInfoSec />
          </Box>
        </WhiteMobileBackground>
      </Box>
    </>
  );
}

export default ForgotPassWord;
