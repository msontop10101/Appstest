import React from "react";
import Styles from "./ResetPasswordForm.module.css";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs, PasswordRequirement } from "../../files/data";

import CustomButton from "../CustomButton/CustomButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";

function ResetPasswordFrom() {
  const headerOne = {
    fontWeight: "bold",
  };
  const labelStyles = {
    fontSize: 15,
    marginBottom: 1,
    marginTop: 1,
  };
  const buttonStyles = {
    fontSize: "1.2rem",
    width: {
      sm: 200,
    },
    marginTop: 1,
    padding: 1,
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const ccStyles = {
    "& .MuiInputBase-root": {
      "& input": {
        textAlign: "center",
      },
      fontSize: "1rem",
    },
  };
  const headerMsg = {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.7)",
  };
  const subMsg = {
    marginTop: 1,
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.7)",
  };
  const reqHeader = {
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: "10px 0px 10px 0px",
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.containerContent}>
          <div className={Styles.contentWrapper}>
            <div className={Styles.headerContent}>
              <div>
                <Link href="/">
                  <a>
                    <KeyboardBackspaceIcon />
                  </a>
                </Link>
              </div>
              <div className={Styles.headerTexts}>
                <div className={Styles.headerOne}>
                  <Typography sx={headerOne} variant="h6">
                    Reset Password
                  </Typography>
                  <div>
                    <Image src={LoginFormImgs[5]} alt="wave" />
                  </div>
                </div>
                <div>
                  <Typography sx={headerMsg}>
                    Enter your new password and confirm your password
                  </Typography>
                </div>
              </div>
            </div>
            <div className={Styles.formContainer}>
              <Grid container rowSpacing={1.5} columnSpacing={2}>
                <Grid item xs={12}>
                  <label>
                    <Typography sx={labelStyles}>New Password</Typography>
                  </label>
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image src={LoginFormImgs[1]} alt="password" />
                          <Divider
                            sx={{ height: 28, m: 1.5 }}
                            orientation="vertical"
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography variant="body1">Show</Typography>
                        </InputAdornment>
                      ),
                    }}
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="Enter new password"
                  />
                  <Grid item xs={12}>
                    <Typography sx={subMsg}>
                      Must be at least 8 charaters
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <Typography sx={labelStyles}>Confirm Password</Typography>
                  </label>
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image src={LoginFormImgs[1]} alt="password" />
                          <Divider
                            sx={{ height: 28, m: 1.5 }}
                            orientation="vertical"
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography variant="body1">Show</Typography>
                        </InputAdornment>
                      ),
                    }}
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="Enter new password"
                  />
                  <Grid item xs={12}>
                    <Typography sx={subMsg}>
                      Both passwords must match
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <div>
                <CustomButton
                  type="submit"
                  color="primary"
                  size="small"
                  variant="contained"
                  sx={buttonStyles}
                  fullWidth={true}
                >
                  <Typography>
                    <Box sx={{ textTransform: "capitalize" }}>Sign in</Box>
                  </Typography>
                </CustomButton>
              </div>
            </div>
            <div>
              <Typography sx={reqHeader}>Password requirement:</Typography>
              <div>
                {PasswordRequirement.map((reqs, index) => {
                  const { info } = reqs;
                  return (
                    <div key={index} className={Styles.reqs}>
                      <div className={Styles.checkImg}>
                        <Image src={LoginFormImgs[6]} alt="check" />
                      </div>
                      <div className={Styles.info}>{info}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordFrom;
