import React from "react";
import CustomButton from "../../../General/CustomButton/CustomButton";
import Image from "next/image";
import { LoginFormImgs } from "../../../../files/data";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import FormControl, { formControlClasses } from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  orgName: yup.string().min(2).required("Field is required"),
  role: yup.string().min(2).required("Field is required"),
});

function OPForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      orgName: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      router.push("/Dashboard");
    },
  });
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
  const inviteBtn = {
    fontSize: "1.2rem",
    width: {
      sm: 100,
    },
    padding: 1,
  };
  const headerOne = {
    fontWeight: "bold",
  };
  const headerMsg = {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.7)",
  };
  const container = {
    width: "60%",
}
const containerContent = {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
}
const headerContentText = {
    marginBottom: "25px",
}
const headerOneContainer = {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
}
const formContainerInner = {
    marginBottom: "10px",
}
const fpswd = {
    float: "right",
    marginTop: "20px",
}

  return (
    <>
      <Box sx={container}>
        <Box sx={containerContent}>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <Box>
              <Box>
                <Box sx={headerContentText}>
                  <Box sx={headerOneContainer}>
                    <Typography sx={headerOne} variant="h6">
                      Setup your organization profile
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={headerMsg}>
                      Please fill in your details to create your organization
                      profile
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <FormControl>
                    {/* formContainerInner */}
                    <Box sx={formContainerInner}>
                      <Grid container columnSpacing={3}>
                        <Grid item xs={12}>
                          <label>
                            <Typography sx={labelStyles}>
                              Name of Organization
                            </Typography>
                          </label>
                          <TextField
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Image src={LoginFormImgs[7]} alt="org" />
                                  <Divider
                                    sx={{ height: 28, m: 1.5 }}
                                    orientation="vertical"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            id="orgName"
                            name="orgName"
                            size="small"
                            variant="outlined"
                            placeholder="Company"
                            value={formik.values.orgName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.orgName &&
                              Boolean(formik.errors.orgName)
                            }
                            helperText={
                              formik.touched.orgName && formik.errors.orgName
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <label>
                            <Typography sx={labelStyles}>
                              Role in Organization
                            </Typography>
                          </label>
                          <TextField
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Image src={LoginFormImgs[7]} alt="org" />
                                  <Divider
                                    sx={{ height: 28, m: 1.5 }}
                                    orientation="vertical"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            id="role"
                            name="role"
                            size="small"
                            variant="outlined"
                            placeholder="CTO"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.role && Boolean(formik.errors.role)
                            }
                            helperText={
                              formik.touched.role && formik.errors.role
                            }
                          />
                        </Grid>
                      </Grid>
                      <label>
                        <Typography sx={labelStyles}>
                          Invite your team
                        </Typography>
                      </label>
                      <Grid container>
                        <Grid item xs={7}>
                          <TextField
                            sx={{
                              "& .MuiInputBase-root": {
                                border: "1px solid gray",
                                borderRadius: "5px 0px 0px 5px",
                              },
                            }}
                            fullWidth
                            id="outlined-basic"
                            size="small"
                            variant="outlined"
                            placeholder="Invite your team (Multiple lines and comma)"
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            sx={{
                              "& .MuiInputBase-root": {
                                border: "1px solid gray",
                                borderRadius: "0px 5px 5px 0px",
                              },
                            }}
                            fullWidth
                            id="outlined-basic"
                            size="small"
                            variant="outlined"
                            placeholder="Member"
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            color="primary"
                            size="small"
                            variant="contained"
                            sx={inviteBtn}
                            fullWidth={true}
                          >
                            <Typography>
                              <Box sx={{ textTransform: "capitalize" }}>
                                Invite
                              </Box>
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </FormControl>
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
                        Setup Profile
                      </Box>
                    </Typography>
                  </CustomButton>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default OPForm;
