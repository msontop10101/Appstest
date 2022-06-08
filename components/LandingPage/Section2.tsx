import React from "react";
import Image from "next/image";
import styles from "./Section2.module.css";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import allea from "../../Assets/Images/Section1/allea.png";
import bleyt from "../../Assets/Images/Section1/bleyt.png";
import inlaks from "../../Assets/Images/Section1/inlaks.png";
import providusbank from "../../Assets/Images/Section1/providusbank.png";

function Section2() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <Box mt={5} className={styles.boxContainer}>
          <p>Trusted by:</p>
          <Grid container my={2} columnSpacing={6}>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Image src={allea} alt="allea" />
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Image src={bleyt} alt="bleyt" />
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Image src={inlaks} alt="inlaks" />
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Image src={providusbank} alt="providusbank" />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Section2;
