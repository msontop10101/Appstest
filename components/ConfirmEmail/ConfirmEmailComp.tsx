import React from "react";
import Styles from "./ConfirmEmailComp.module.css";
import Typography from "@mui/material/Typography";
import CustomButton from "../CustomButton/CustomButton";
import Box from "@mui/material/Box";
import Link from "next/link";
import Divider from "@mui/material/Divider";

function ConfirmEmailComp() {
  const buttonStyles = {
    fontSize: "1.2rem",
    // width: {
    //   sm: 200,
    // },
    marginTop: 1,
    padding: 1,
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const headerOne = {
    fontWeight: "bold",
    fontSize: 18,
  };
  const headerMsg = {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.7)",
  };
  const textLogo = {
    color: "#00690B",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 1,
  };
  const footerText = {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.7)",
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.contentWrapper}>
          <div className={Styles.contentContainer}>
            <div className={Styles.headerContent}>
              <div>
                <Link href="/">
                  <a>
                    <Typography sx={textLogo} variant="h6">
                      AppsTest
                    </Typography>
                  </a>
                </Link>
                <Divider />
              </div>
              <div className={Styles.headerTexts}>
                <div>
                  <Typography sx={headerOne} variant="h6">
                    Hi, Maureen!
                  </Typography>
                </div>
                <div>
                  <Typography sx={headerMsg}>
                    Thanks for signing up with AppsTest! Before you get started
                    with AppsTest, we need to confirm your email address
                  </Typography>
                </div>
                <div>
                  <Typography sx={headerMsg}>
                    Please click on the button below to complete your sign up
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <CustomButton
                color="primary"
                size="small"
                variant="contained"
                sx={buttonStyles}
                fullWidth={true}
              >
                <Typography>
                  <Link href="../../ProfileSetup">
                    <a>
                      <Box sx={{ textTransform: "capitalize" }}>
                        Confirm email address
                      </Box>
                    </a>
                  </Link>
                </Typography>
              </CustomButton>
            </div>
            <div>
              <Typography sx={headerMsg}>
                If you have any trouble clicking the button above please copy
                and paste the URL below into your browser
              </Typography>
              <Typography sx={headerMsg}></Typography>
            </div>
          </div>
          <div className={Styles.footer}>
            <footer>
              <Typography sx={footerText}>&copy;AppsTest Ltd 2021</Typography>
              <Typography sx={footerText}>
                Manual Testing platform for Africa
              </Typography>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmEmailComp;
