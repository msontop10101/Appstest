import React, { useState } from "react";
import Styles from "./ResetPasswordForm.module.css"
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs, PasswordRequirement } from "../../../../files/data";
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
  password: yup
    .string()
    .min(8, "Charaters must be upto 8")
    .required("New password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function ResetPasswordFrom() {
  let router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      router.push("/Dashboard");
    },
  });
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
  const pshow = {
    fontSize: 14,
    cursor: "pointer",
  };
  const keyBackStyle = {
    display: {
      xs: "none",
      sm: "block",
    },
  };
  const containerContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: {
      sm: "100vh",
      xs: "70vh",
    },
}
const contentWrapper = {
    width: "80%",
}
const headerContent = {
   margin: "5px 0px 5px 0px",
}
const headerOneContainer = {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
}
const headerOneInner = {
    marginLeft: "10px",
}
const formContainerInner = {
    marginBottom: "20px",
}
const reqs = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
}
const info = {
    marginLeft: "10px",
    fontSize: "14px",
}
const checkImg = {
    width: "20px",
    height: "20px",
}


  return (
    <>
      <Box>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Box sx={containerContent}>
            <Box sx={contentWrapper}>
              <Box sx={headerContent}>
                <Box>
                  <Link href="/">
                    <a>
                      <KeyboardBackspaceIcon sx={keyBackStyle} />
                    </a>
                  </Link>
                </Box>
                <Box>
                  <Box sx={headerOneContainer}>
                    <Typography sx={headerOne} variant="h6">
                      Reset Password
                    </Typography>
                    <Box>
                      <Image src={LoginFormImgs[5]} alt="wave" />
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={headerMsg}>
                      Enter your new password and confirm your password
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Grid container rowSpacing={1.5} columnSpacing={2}>
                  <Grid item xs={12}>
                    <label>
                      <Typography sx={labelStyles}>New Password</Typography>
                    </label>
                    <TextField
                      autoComplete="new-password"
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
                      placeholder="Enter new password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
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
                      autoComplete="new-password"
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
                            <Box onClick={handleClickShowPassword}>
                              <Typography variant="body1" sx={pshow}>
                                {showPassword ? "hide" : "show"}
                              </Typography>
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      type={showPassword ? "text" : "password"}
                      size="small"
                      variant="outlined"
                      placeholder="Enter new password"
                      value={formik.values.passwordConfirmation}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.passwordConfirmation &&
                        Boolean(formik.errors.passwordConfirmation)
                      }
                      helperText={
                        formik.touched.passwordConfirmation &&
                        formik.errors.passwordConfirmation
                      }
                    />
                    <Grid item xs={12}>
                      <Typography sx={subMsg}>
                        Both passwords must match
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box>
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
                </Box>
              </Box>
              <Box>
                <Typography sx={reqHeader}>Password requirement:</Typography>
                <Box>
                  {PasswordRequirement.map((reqs, index) => {
                    const { info } = reqs;
                    return (
                      <Box key={index} sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                        <Box sx={checkImg}>
                          <Image src={LoginFormImgs[6]} alt="check" />
                        </Box>
                        <Box sx={{ml: 1}}>{info}</Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default ResetPasswordFrom;
