import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Section5.module.css";
import Image from "next/image";
import phone from "../../Assets/Images/Section5/phone.png";
import mail from "../../Assets/Images/Section5/mail.png";
import location from "../../Assets/Images/Section5/location.png";

import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

function Section5() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.sectionContainer}>
          <Box>
            <Grid container columnSpacing={6} rowSpacing={4}>
              <Grid item>
                <div className={styles.contentContainer}>
                  <Image src={phone} alt="image" />
                  <p>+2349161206727</p>
                </div>
              </Grid>
              <Grid item>
                <div className={styles.contentContainer}>
                  <Image src={mail} alt="image" />
                  <p>usesupport@appstest.com</p>
                </div>
              </Grid>
              <Grid item>
                <div className={styles.contentContainer}>
                  <Image src={location} alt="image" />
                  <p>The Penial Building, Aguda Ogba, Lagos.</p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className={styles.footerIcons}>
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
        </div>
      </div>
    </>
  );
}

export default Section5;
