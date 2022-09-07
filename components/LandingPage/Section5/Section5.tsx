import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import phone from "../../../Assets/Images/Section5/phone.png";
import mail from "../../../Assets/Images/Section5/mail.png";
import location from "../../../Assets/Images/Section5/location.png";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Section5 = () => {
  const contentContainer = {
    display: "flex",
    alignItems: "center",
}
const contentContainerText = {
    paddingLeft: {
      sm: "7px",
      xs: "20px"
    },
}
const sectionContainer = {
    display: "flex",
    justifyContent: "center",
    padding: {
      sm: "0px",
      xs: "0px 20px 0px 20px"
    }
}
const footerIcons = {
    display: "flex",
    justifyContent: "center",
}
const Container = {
    backgroundColor: "#FCFCFC",
    padding: "30px 0px 30px 0px",
}
  return (
    <>
      <Box sx={Container}>
        <Box sx={sectionContainer}>
          <Box>
            <Grid container columnSpacing={6} rowSpacing={4}>
              <Grid item>
                <Box sx={contentContainer}>
                  <Image src={phone} alt="image" />
                  <Typography sx={contentContainerText}>+2349161206727</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={contentContainer}>
                  <Image src={mail} alt="image" />
                  <Typography sx={contentContainerText}>usesupport@appstest.com</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={contentContainer}>
                  <Image src={location} alt="image" />
                  <Typography sx={contentContainerText}>The Penial Building, Aguda Ogba, Lagos.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={footerIcons}>
          <Box mt={5}>
            <Grid container columnSpacing={6}>
              <Grid item>
                <FaTwitter />
              </Grid>
              <Grid item>
                <FaFacebook />
              </Grid>
              <Grid item>
                <FaLinkedin />
              </Grid>
              <Grid item>
                <FaInstagram />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Section5;
