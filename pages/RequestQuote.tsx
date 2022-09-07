import React from "react";
import RqForm from "../components/AuthScreens/RequestQuote/RequestQuoteForm/RequestQuoteForm";
import ServiceSection from "../components/General/ServiceSection/ServiceSection";
import MobileBackground from "../components/General/MobileBackground/MobileBackground";
import {Box} from "@mui/material"

const RequestQuote = () => {

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
        <RqForm />
      </Box>
      <Box sx={mobileContainer}>
        <MobileBackground>
          <RqForm />
        </MobileBackground>
      </Box>
    </>
  );
}

export default RequestQuote;
