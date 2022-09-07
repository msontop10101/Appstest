import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../../../files/data";

import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CustomButton from "../../../General/CustomButton/CustomButton";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

function ForgotPswdForm() {
  let router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      router.push("/ResetPassword");
    },
  });
  const headerOne = {
    fontWeight: "bold",
  };
  const headerMsg = {
    fontSize: 12,
    color: {
      xs: "white",
      sm: "rgba(0, 0, 0, 0.7)",
    },
  };
  const textLogo = {
    color: "#00690B",
    textTransform: "uppercase",
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
  const backLink = {
    fontSize: 14,
    color: {
      xs: "white",
      sm: "#00690B",
    },
    cursor: "pointer",
  };
  const container = {
    width: {
      sm: "60%",
      xs: "100%",
    },
    backgroundColor:{
      sm: "white",
      xs:  "#00690B",
    },
    borderRadius: "5px",
    color: {
      sm: "black",
      xs: "white",
    },
    margin: "20px 0px 20px 0px",
  };
  const containerContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: {
      sm: "100vh",
      xs: "50vh",
    },
  };
  // styling
  const contentWrapper = {
    width: "80%",
  };
  const headerContentInner = {
    marginBottom: "25px",
  };
  const headerOneContainer = {
    display: "flex",
    alignItems: "center",
    marginBottom : "5px",
  };
  const buttons = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const headerTextInner = {
    marginBottom: "5px,"
  }
  const formContainerInner = {
    marginBottom: "25px",
}
  return (
    <>
      <Box sx={container}>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={containerContent}>
            <Box sx={contentWrapper}>
              <Box> 
                {/* headercontentcontainer */}
                <Box sx={headerContentInner}>
                  <Link href="/">
                    <a>
                      <Typography sx={textLogo} variant="h6">
                        AppsTest
                      </Typography>
                    </a>
                  </Link>
                </Box>
                <Box>
                  <Box sx={headerOneContainer}>
                    <Typography sx={headerOne} variant="h6">
                      Forgot Password
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={headerMsg}>
                      Enter your email and you&apos;ll recieve an email with
                      your password reset link
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={formContainerInner}>
                <Grid container rowSpacing={1.5}>
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
                      id="email"
                      name="email"
                      size="small"
                      variant="outlined"
                      placeholder="Enter your work email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={buttons}>
                <Box>
                  <CustomButton
                    color="primary"
                    size="small"
                    variant="contained"
                    sx={buttonStyles}
                    fullWidth={true}
                    type="submit"
                  >
                    <Typography>
                      <Box sx={{ textTransform: "capitalize" }}>Send email</Box>
                    </Typography>
                  </CustomButton>
                </Box>
                <Box>
                  <Box sx={backLink}>
                    <Link href="../../Login">
                      <Typography sx={backLink}>
                        <a>Back to Login page</a>
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default ForgotPswdForm;
