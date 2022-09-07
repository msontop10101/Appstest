import React, { useState } from "react";
import CustomButton from "../../../General/CustomButton/CustomButton";
import Link from "next/link";
import Image from "next/image"; 
import { LoginFormImgs, RLoginIcons } from "../../../../files/data";

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
import { useRouter } from "next/router";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
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
      // alert(JSON.stringify(values, null, 2));
      router.push("/Dashboard");
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
    fontSize: 14,
    cursor: "pointer",
  };
  const container = {
    width: {
      sm: "60%",
      xs: "100%"
    }
}
const containerContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgrounColor: "#00690B",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
}
const headerContentContainer = {
    marginBottom: "25px",
    marginTop: {
      sm: "initial",
      xs: "20px"
    }
}
const headerTextsContent = {
    marginBottom: "5px",
}
const headerOneContainer = {
    display: "flex",
    alignItems: "center",
}
const headerOneContent = {
    marginLeft: "10px",
}
const formContainerContent = {
    marginBottom: "10px",
}
const forgotpassword = {
  float: "right",
  marginTop: "20px",
  color: {
    sm: "initial",
    xs: "white"
  }
}
const backIcon = {
  display: {
    sm :  "block",
    xs: "none",
  },
}
const desktopwave = {
  display: {
    sm: "block",
    xs: "none"
  },
}
const mobilewave = {
  display: {
    sm: "none",
    xs: "block"
  },
}

  return (
    <>
      <Box sx={container}>
        <Box sx={containerContent}>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Box sx={headerContentContainer}>
                <Box sx={backIcon}>
                  <Link href="/">
                    <a>
                      <KeyboardBackspaceIcon />
                    </a>
                  </Link>
                </Box>
                <Box sx={headerTextsContent}>
                  <Box sx={headerOneContainer}>
                    <Typography sx={headerOne} variant="h6">
                      Welcome Back
                    </Typography>
                    <Box sx={desktopwave}>
                      <Image src={LoginFormImgs[0]} alt="wave" />
                    </Box>
                    <Box sx={mobilewave}>
                      <Image src={RLoginIcons[1]} alt="wave" />
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={headerMsg}>
                      We&apos;re excited to have you back
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={formContainerContent}>
                <Box>
                  <Box>
                    <FormControl>
                      <Box>
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
                                    <Box onClick={handleClickShowPassword}>
                                      <Typography variant="body1" sx={pshow}>
                                        {showPassword ? "hide" : "show"}
                                      </Typography>
                                    </Box>
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
                              <Box sx={forgotpassword}>
                                <Link href="../../ForgotPassword">
                                  <a>
                                    <Typography>Forgot Password?</Typography>
                                  </a>
                                </Link>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </FormControl>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
