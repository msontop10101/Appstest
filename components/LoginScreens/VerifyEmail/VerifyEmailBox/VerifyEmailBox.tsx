import React from "react";
import Typography from "@mui/material/Typography";
import CustomButton from "../../../General/CustomButton/CustomButton";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../../../files/data";

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
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
}
const contentContainerInner = {
    marginBottom: "25px",
}
const contentContainer = {
    width: {
      sm: "30%",
      xs: "90%"
    },
}
const headerContentInner = {
    marginBottom: "25px",
}

const headerTextsInner = {
    marginBottom: "15px",
}
const link = {
    color: "#00690B",
    textDecoration: "underline",
}
const logo = {
    display: {
      sm: "block",
      xs: "none"
    },
}
const verify = {
    display: {
      sm: "none",
      xs: "block"
    },
}

  return (
    <>
      <Box sx={container}>
        <Box sx={contentContainer}>
          {/* contentcontainerInner */}
          <Box sx={contentContainerInner}>
            {/* headercontentinner */}
            <Box sx={headerContentInner}>
              <Link href="/">
                <a>
                  <Typography sx={textLogo} variant="h6">
                    AppsTest
                  </Typography>
                </a>
              </Link>
            </Box>
            <Box sx={verify}>
              <Image src={LoginFormImgs[9]} alt="verify" />
            </Box>
            <Box >
              {/* headerTextInner */}
              <Box sx={headerTextsInner}>
                <Typography sx={headerOne} variant="h6">
                  Verify email address
                </Typography>
              </Box>
              <Box>
                <Typography sx={headerMsg}>
                  we have sent you a unique link to your email adddress to help
                  you proceed in exploring AppsTest
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Link href="../../ConfirmEmail">
              <a>
                <CustomButton
                  type="submit"
                  color="primary"
                  size="small"
                  variant="contained"
                  sx={buttonStyles}
                  fullWidth={true}
                >
                  <Typography>
                    <Box sx={{ textTransform: "capitalize" }}>
                      Open email app
                    </Box>
                  </Typography>
                </CustomButton>
              </a>
            </Link>
          </Box>
          <Box>
            <Typography sx={lMsg}> Skip I&apos;ll confirm later</Typography>
            <Typography sx={lmsg}>
              {" "}
              Didn&apos;t recieve email, Check your spam folder or{" "}
              <span style={link}>try another email address</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default VerifyEmailBox;
