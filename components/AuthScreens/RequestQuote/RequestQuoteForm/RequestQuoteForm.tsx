import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../../../files/data";

import CustomButton from "../../../General/CustomButton/CustomButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";

import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  firstName: yup.string().min(2).required("Field is required"),
  lastName: yup.string().min(2).required("Field is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.number().min(8).required("Field is required"),
});
const RequestQuoteForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      router.push("/VerifyEmail");
    },
  });
  const headerOne = {
    fontWeight: "bold",
    mr:1
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
  const ccStyles = {
    "& .MuiInputBase-root": {
      "& input": {
        textAlign: "center",
      },
      fontSize: "1rem",
    },
  };
  const containerContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}
const contentWrapper = {
  width: "80%",
}
const headerContentContainer = {
  marginBottom: "25px",
}
const headerTextsContainer = {
  marginBottom: "5px",
}
const headerOneContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: {
    sm: "initial",
    xs: "center",
  }
}
const formContainer = {
  marginBottom: "25px",
}
const check = {
  display: "flex",
  alignItems: "center",
}
const backIcon = {
  display: {
    sm: "block",
    xs: "none"
  }
}


  return (
    <>
      <Box>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Box sx={containerContent}>
            <Box sx={contentWrapper}>
              <Box sx={headerContentContainer}>
                <Box sx={backIcon}>
                  <Link href="/">
                    <a>
                      <KeyboardBackspaceIcon />
                    </a>
                  </Link>
                </Box>
                <Box sx={headerTextsContainer}>
                  <Box sx={headerOneContainer}>
                    <Typography sx={headerOne} variant="h6">
                      Request Quote
                    </Typography>
                    <Box>
                      <Image src={LoginFormImgs[3]} alt="wave" />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={formContainer}>
                <Grid container rowSpacing={1.5} columnSpacing={2}>
                  <Grid item xs={12} sm={6}>
                    <label>
                      <Typography sx={labelStyles}>First Name</Typography>
                    </label>
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image src={LoginFormImgs[4]} alt="detail" />
                            <Divider
                              sx={{ height: 28, m: 1.5 }}
                              orientation="vertical"
                            />
                          </InputAdornment>
                        ),
                      }}
                      id="firstName"
                      name="firstName"
                      size="small"
                      variant="outlined"
                      placeholder="Enter your first name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>
                      <Typography sx={labelStyles}>Last Name</Typography>
                    </label>
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image src={LoginFormImgs[4]} alt="detail" />
                            <Divider
                              sx={{ height: 28, m: 1.5 }}
                              orientation="vertical"
                            />
                          </InputAdornment>
                        ),
                      }}
                      id="lastName"
                      name="lastName"
                      size="small"
                      variant="outlined"
                      placeholder="Enter your last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                      <Typography sx={labelStyles}>Work Email</Typography>
                    </label>
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Image src={LoginFormImgs[2]} alt="email" />
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
                <label>
                  <Typography sx={labelStyles}>Phone Number</Typography>
                </label>
                <Grid container columnSpacing={2}>
                  <Grid item xs={3} sm={2}>
                    <TextField
                      sx={ccStyles}
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      placeholder="+234"
                    />
                  </Grid>
                  <Grid item xs={9} sm={10}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      size="small"
                      variant="outlined"
                      placeholder="9029855826"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                </Grid>
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
                      <Box sx={{ textTransform: "capitalize" }}>
                        Request Quote
                      </Box>
                    </Typography>
                  </CustomButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default RequestQuoteForm;
