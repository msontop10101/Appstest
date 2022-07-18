import React from "react";
import Styles from "./VerifyEmailBox.module.css";
import Typography from "@mui/material/Typography";
import CustomButton from "../CustomButton/CustomButton";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../files/data";

function VerifyEmailBox() {
  const buttonStyles = {
    fontSize: "1.2rem",
    marginTop: 2,
    padding: 1,
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const headerOne = {
    fontWeight: "bold",
    fontSize: 24,
  };
  const headerMsg = {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.7)",
  };
  const textLogo = {
    color: "#00690B",
    textTransform: "uppercase",
    fontWeight: "bold",
  };
  const lMsg = {
    color: "rgba(0, 0, 0, 0.7);",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  };
  const lmsg = {
    color: "rgba(0, 0, 0, 0.7);",
    fontWeight: "bold",
    fontSize: 14,
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.contentContainer}>
          <div className={Styles.headerContent}>
            <div className={Styles.logo}>
              <Link href="/">
                <a>
                  <Typography sx={textLogo} variant="h6">
                    AppsTest
                  </Typography>
                </a>
              </Link>
            </div>
            <div className={Styles.verify}>
              <Image src={LoginFormImgs[9]} alt="verify" />
            </div>
            <div className={Styles.headerTexts}>
              <div>
                <Typography sx={headerOne} variant="h6">
                  Verify email address
                </Typography>
              </div>
              <div>
                <Typography sx={headerMsg}>
                  we have sent you a unique link to your email adddress to help
                  you proceed in exploring AppsTest
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
                <Link href="../../ConfirmEmail">
                  <a>
                    <Box sx={{ textTransform: "capitalize" }}>
                      Open email app
                    </Box>
                  </a>
                </Link>
              </Typography>
            </CustomButton>
          </div>
          <div>
            <Typography sx={lMsg}> Skip I&apos;ll confirm later</Typography>
            <Typography sx={lmsg}>
              {" "}
              Didn&apos;t recieve email, Check your spam folder or{" "}
              <span className={Styles.link}>try another email address</span>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmailBox;
