import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Styles from "./LoginForm.module.css";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../files/data";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function LoginForm() {
  const headerStyles = {
    marginTop: 2,
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
  const headerOne = {
    fontWeight: "bold",
  };
  const headerMsg = {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.7)",
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
                    Welcome Back
                  </Typography>
                  <div>
                    <Image src={LoginFormImgs[0]} alt="wave" />
                  </div>
                </div>
                <div>
                  <Typography sx={headerMsg}>
                    We&apos;re excited to have you back
                  </Typography>
                </div>
              </div>
            </div>
            <div className={Styles.formContainer}>
              <Box>
                <FormControl>
                  <div>
                    <Grid container columnSpacing={3}>
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
                        <label>
                          <Typography sx={labelStyles}>Password</Typography>
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
                          placeholder="Enter your password"
                        />
                        <Grid item xs={12}>
                          <div className={Styles.fpswd}>
                            <Link href="../../ForgotPassword">
                              <a>
                                <Typography>Forgot Password?</Typography>
                              </a>
                            </Link>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </FormControl>
              </Box>
              <div>
                <CustomButton
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
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
