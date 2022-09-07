import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import chrome from "../../Assets/Images/Reports/chrome.png";
import ie from "../../Assets/Images/Reports/ie.png";
import firefox from "../../Assets/Images/Reports/firefox.png";
import Image from "next/image";

const Ratios = () => {
    const container = {
        display: "flex",
        justifyContent: "space-between",
        width: "40%",
        mt: 5
    }
    const ratioContainer = {
        width: "60%"
    }
    const textSpacing = {
        mb: 2
    }
  return (
    <>
      <Box sx={container}>
        <Typography>Sucess Ratio</Typography>
        <Grid container sx={ratioContainer}>
            <Grid item sm={4}>
                <Typography sx={textSpacing}>90%</Typography>
                <Image src={chrome} alt="chrome" />
            </Grid>
            <Grid item sm={4}>
                <Typography sx={textSpacing}>90%</Typography>
                <Image src={ie} alt="IE" />
            </Grid>
            <Grid item sm={4}>
                <Typography sx={textSpacing}>90%</Typography>
                <Image src={firefox} alt="FireFox" />
            </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Ratios;
