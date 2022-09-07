import React from "react";
import Typography from "@mui/material/Typography";
import CustomButton from "../../General/CustomButton/CustomButton";
import Box from "@mui/material/Box";
import Link from "next/link";
import Divider from "@mui/material/Divider";

function ConfirmEmailComp() {
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}
const headerContent = {
    marginBottom: "20px"
}
const contentContainer = {
    padding: "20px",
    border: "1px solid rgb(192, 189, 189)",
    borderRadius: "5px",
}
const contentWrapper = {
    width: {
      sm: "30%",
      xs: "90%"
    }
}
const headerContentInner = {
    marginBottom: "10px",
}
const headerOneContainer = {
    display: "flex",
    alignItems: "center",
}
const headerOneInner = {
    marginLeft: "10px",
}
const headerTextsInner = {
    marginBottom: "15px",
}
const link = {
    color: " #00690B",
    textDecoration: "underline",
}
const footer = {
  textAlign: "center",
  marginTop: "10px",
}
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
      <Box sx={container}>
        <Box sx={contentWrapper}>
          <Box sx={contentContainer}>
            <Box sx={headerContent}>
              <Box sx={headerContentInner}>
                <Link href="/">
                  <a>
                    <Typography sx={textLogo} variant="h6">
                      AppsTest
                    </Typography>
                  </a>
                </Link>
                <Divider />
              </Box>
              <Box >
                <Box sx={headerTextsInner}>
                  <Typography sx={headerOne} variant="h6">
                    Hi, Maureen!
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={headerMsg}>
                    Thanks for signing up with AppsTest! Before you get started
                    with AppsTest, we need to confirm your email address
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={headerMsg}>
                    Please click on the button below to complete your sign up
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Link href="../../ProfileSetup">
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
                        Confirm email address
                      </Box>
                    </Typography>
                  </CustomButton>
                </a>
              </Link>
            </Box>
            <Box>
              <Typography sx={headerMsg}>
                If you have any trouble clicking the button above please copy
                and paste the URL below into your browser
              </Typography>
              <Typography sx={headerMsg}></Typography>
            </Box>
          </Box>
          <Box sx={footer}>
            <footer>
              <Typography sx={footerText}>&copy;AppsTest Ltd 2021</Typography>
              <Typography sx={footerText}>
                Manual Testing platform for Africa
              </Typography>
            </footer>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ConfirmEmailComp;
