import React from "react";
import Styles from "./RaForm.module.css";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../files/data";
import CustomButton from "../CustomButton/CustomButton";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RaForm() {
  const headerOne = {
    fontWeight: "bold",
  };
  const labelStyles = {
    fontSize: 15,
    marginBottom: 1,
    marginTop: 2,
  };
  const buttonStyles = {
    fontSize: "1.2rem",
    width: {
      sm: 200,
    },
    marginTop: 2,
    padding: 1,
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const checkedStyles = {
    color: "gray",
    "&.Mui-checked": {
      color: "#000000",
    },
  };
  const textStyle = {
    fontSize: {
      xs: 14,
      sm: 20,
    },
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.containerContent}>
          <div className={Styles.contentWrapper}>
            <div className={Styles.headerContent}>
              <div className={Styles.backIcon}>
                <Link href="/">
                  <a>
                    <KeyboardBackspaceIcon />
                  </a>
                </Link>
              </div>
              <div className={Styles.headerTexts}>
                <div className={Styles.headerOne}>
                  <Typography sx={headerOne} variant="h6">
                    Request Access
                  </Typography>
                  <div>
                    <Image src={LoginFormImgs[3]} alt="wave" />
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.formContainer}>
              <Grid container rowSpacing={{ xs: 2, sm: 4 }}>
                <Grid item xs={12}>
                  <label>
                    <Typography sx={labelStyles}>Work Email</Typography>
                  </label>
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image src={LoginFormImgs[2]} alt="password" />
                          <Divider
                            sx={{ height: 28, m: 1.5 }}
                            orientation="vertical"
                          />
                        </InputAdornment>
                      ),
                    }}
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="Enter your work email address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className={Styles.check}>
                    <div>
                      <Checkbox {...label} sx={checkedStyles} />
                    </div>
                    <Typography sx={textStyle}>
                      I have read and I agreee with the{" "}
                      <span className={Styles.link}>Terms of use</span>
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={Styles.check}>
                    <div>
                      <Checkbox {...label} sx={checkedStyles} />
                    </div>
                    <Typography sx={textStyle}>
                      Send me occasional email about AppsTest services
                      (unsubscribe at any time)
                    </Typography>
                  </div>
                </Grid>
              </Grid>
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
                  <Link href="../../VerifyEmail">
                    <a>
                      <Box sx={{ textTransform: "capitalize" }}>
                        Request Access
                      </Box>
                    </a>
                  </Link>
                </Typography>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RaForm;
