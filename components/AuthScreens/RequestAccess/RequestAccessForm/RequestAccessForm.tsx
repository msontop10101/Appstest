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
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const RequestAccessForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      router.push("/VerifyEmail");
    },
  });
  const headerOne = {
    fontWeight: "bold",
    mr: 1
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
    fontSize: 14,
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
    alignItems: {
      sm: "center",
      xs: "initial"
    },
    height: {
      sm: "100vh",
      xs: "88vh",
    },
  }
  const contentWrapper = {
    width: "80%"
  }
  const headerContentContainer = {
    marginBottom: "25px",
    marginTop: {
      sm: "0px",
      xs: "30px"
    }
  }
  const headerTextContainer = {
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
    alignItems: {
      sm: "center",
      xs: "baseline"
    },
  }
  const linkStyle = {
    color:"#00690B",
    textDecoration: "underline",
  }
  const backIcon = {
    display: {
      sm: "block",
      xs: "none"
    }
  }
  return (
    <>
      <Box sx={container}>
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
                <Box sx={headerTextContainer}>
                  <Box sx={headerOneContainer}>
                    <Typography sx={headerOne} variant="h6">
                      Request Access
                    </Typography>
                    <Box>
                      <Image src={LoginFormImgs[3]} alt="wave" />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={formContainer}>
                <Grid container rowSpacing={2}>
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
                  <Grid item xs={12}>
                    <Box sx={check}>
                      <Box>
                        <Checkbox {...label} sx={checkedStyles} />
                      </Box>
                      <Typography sx={textStyle}>
                        I have read and I agreee with the{" "}
                        <span style={linkStyle}>Terms of use</span>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={check}>
                      <Box>
                        <Checkbox {...label} sx={checkedStyles} />
                      </Box>
                      <Typography sx={textStyle}>
                        Send me occasional email about AppsTest services
                        (unsubscribe at any time)
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
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
                      Request Access
                    </Box>
                  </Typography>
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default RequestAccessForm;
