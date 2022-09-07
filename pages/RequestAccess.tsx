import React from "react";
import RequestAccessForm from "../components/AuthScreens/RequestAccess/RequestAccessForm/RequestAccessForm";
import ServiceSection from "../components/General/ServiceSection/ServiceSection";
import MobileBackground from "../components/General/MobileBackground/MobileBackground";
import {Box} from "@mui/material"

const RequestAccess = () => {
    const container = {
        display: {
            sm: "flex",
            xs: "none"
        },
    height: "100vh"
    }
    const mobileContainer = {
        display: {
            sm: "none",
            xs: "block"
        }
    }
  return (
    <>
      <Box sx={container}>
        <ServiceSection />
        <RequestAccessForm />
      </Box>
      <Box sx={mobileContainer}>
        <MobileBackground>
          <RequestAccessForm />
        </MobileBackground>
      </Box>
    </>
  );
}

export default RequestAccess;
