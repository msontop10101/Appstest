import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import Styles from "./LoginForm.module.css";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs, RLoginIcons } from "../../files/data";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

interface State {
  showPassword: boolean;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const labelStyles = {
    fontSize: 15,
    marginBottom: 1,
    marginTop: 2,
    color: {
      xs: "#ffffff",
      sm: "#000000",
    },
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
    color: { xs: "#ffffff", sm: "rgba(0, 0, 0, 0.7)" },
  };
  const pshow = {
    fontSize: 12,
    cursor: "pointer",
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.containerContent}>
          <form onSubmit={formik.handleSubmit}>
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
                      Welcome Back
                    </Typography>
                    <div className={Styles.dwave}>
                      <Image src={LoginFormImgs[0]} alt="wave" />
                    </div>
                    <div className={Styles.mwave}>
                      <Image src={RLoginIcons[1]} alt="wave" />
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
                <div>
                  <Box>
                    <FormControl>
                      <div>
                        <Grid container columnSpacing={3}>
                          <Grid item xs={12}>
                            <label>
                              <Typography sx={labelStyles}>
                                Work Email
                              </Typography>
                            </label>
                            <TextField
                              fullWidth
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Image
                                      src={LoginFormImgs[2]}
                                      alt="password"
                                    />
                                    <Divider
                                      sx={{ height: 28, m: 1.5 }}
                                      orientation="vertical"
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              id="email"
                              name="email"
                              size="small"
                              variant="outlined"
                              placeholder="Enter your work email address"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                              }
                              helperText={
                                formik.touched.email && formik.errors.email
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <label>
                              <Typography sx={labelStyles}>Password</Typography>
                            </label>
                            <TextField
                              autoComplete="new-password"
                              fullWidth
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Image
                                      src={LoginFormImgs[1]}
                                      alt="password"
                                    />
                                    <Divider
                                      sx={{ height: 28, m: 1.5 }}
                                      orientation="vertical"
                                    />
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <div onClick={handleClickShowPassword}>
                                      <Typography variant="body1" sx={pshow}>
                                        {showPassword ? "hide" : "show"}
                                      </Typography>
                                    </div>
                                  </InputAdornment>
                                ),
                              }}
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              size="small"
                              variant="outlined"
                              placeholder="Enter your password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                              }
                              helperText={
                                formik.touched.password &&
                                formik.errors.password
                              }
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
                      color="secondary"
                      size="small"
                      variant="contained"
                      sx={buttonStyles}
                      type="submit"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
