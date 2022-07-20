import React from "react";
import Styles from "./ForgotPswdForm.module.css";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../files/data";

import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CustomButton from "../CustomButton/CustomButton";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

function ForgotPswdForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const headerOne = {
    fontWeight: "bold",
  };
  const headerMsg = {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.7)",
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
    color: "#00690B",
    cursor: "pointer",
  };
  return (
    <>
      <div className={Styles.container}>
        <form onSubmit={formik.handleSubmit}>
          <div className={Styles.containerContent}>
            <div className={Styles.contentWrapper}>
              <div className={Styles.headerContent}>
                <div>
                  <Link href="/">
                    <a>
                      <Typography sx={textLogo} variant="h6">
                        AppsTest
                      </Typography>
                    </a>
                  </Link>
                </div>
                <div className={Styles.headerTexts}>
                  <div className={Styles.headerOne}>
                    <Typography sx={headerOne} variant="h6">
                      Forgot Password
                    </Typography>
                  </div>
                  <div>
                    <Typography sx={headerMsg}>
                      Enter your email and you&apos;ll recieve an email with
                      your password reset link
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={Styles.formContainer}>
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
              </div>
              <div className={Styles.buttons}>
                <div>
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
                </div>
                <div>
                  <div className={Styles.backLink}>
                    <Link href="../../Login">
                      <Typography sx={backLink}>
                        <a>Back to Login page</a>
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgotPswdForm;
