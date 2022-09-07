import React from "react";

import LoginForm from "../components/LoginScreens/Login/LoginForm/LoginForm";
import LoginGreenSide from "../components/LoginScreens/Login/LoginGreenSide/LoginGreenSide";
import WhiteMobileBackground from "../components/General/MobileBackground/WhiteMobileBackground";
import MobileLoginInfoSec from "../components/LoginScreens/Login/LoginInfoSec/MobileLoginInfoSec";
import {Box} from "@mui/material"

const Login = () => {
  const container = {
    display: {
      sm: "flex",
      xs: "none",
    },
    height: "100vh",
}
const mobileContainer = {
    display: {
      sm: "none",
      xs: "block",
    }
}
  return (
    <>
      <Box sx={container}>
        <LoginGreenSide />
        <LoginForm />
      </Box>
      <Box sx={mobileContainer}>
        <WhiteMobileBackground>
          <Box>
            <LoginForm />
            <MobileLoginInfoSec />
          </Box>
        </WhiteMobileBackground>
      </Box>
    </>
  );
}

export default Login;
