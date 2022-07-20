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
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

function RaForm() {
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
  return (
    <>
      <div className={Styles.container}>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
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
                      id="outlined-basic"
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
                  type="submit"
                >
                  <Typography>
                    <Box sx={{ textTransform: "capitalize" }}>
                      Request Access
                    </Box>
                  </Typography>
                </CustomButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RaForm;
