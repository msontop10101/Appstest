import React from "react";
import Image from "next/image";

import { Box, Typography, Grid } from "@mui/material";

import allea from "../../../Assets/Images/Section1/allea.png";
import bleyt from "../../../Assets/Images/Section1/bleyt.png";
import inlaks from "../../../Assets/Images/Section1/inlaks.png";
import providusbank from "../../../Assets/Images/Section1/providusbank.png";

const Section2 = () => { 
  const sectionContainer = {
    display: "flex",
    justifyContent: "center",
    backgroundColor:  "#FCFCFC",
    paddingBottom: "30px",
}
const sectionContainerText = {
    textAlign: "center",
    fontWeight: "bold",
    padding: "10px",
}
const boxContainer = {
    width: "70%",
    display: "flex",
    flexDirection: "column",
}
const items = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
}
  return (
    <>
      <Box sx={sectionContainer}>
        <Box mt={5} sx={boxContainer}>
          <Typography sx={sectionContainerText}>Trusted by:</Typography>
          <Grid container>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box sx={items}>
                <Image src={allea} alt="allea" />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box sx={items}>
                <Image src={bleyt} alt="bleyt" />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box sx={items}>
                <Image src={inlaks} alt="inlaks" />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box sx={items}>
                <Image src={providusbank} alt="providusbank" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Section2;
