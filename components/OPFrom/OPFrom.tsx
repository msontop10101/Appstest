import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Styles from "./OPForm.module.css";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../files/data";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";

function OPForm() {
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
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.containerContent}>
          <div className={Styles.contentWrapper}>
            <div className={Styles.headerContent}>
              <div className={Styles.headerTexts}>
                <div className={Styles.headerOne}>
                  <Typography sx={headerOne} variant="h6">
                    Setup your organization profile
                  </Typography>
                </div>
                <div>
                  <Typography sx={headerMsg}>
                    Please fill in your details to create your organization
                    profile
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
                          id="outlined-basic"
                          size="small"
                          variant="outlined"
                          placeholder="Company"
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
                          id="outlined-basic"
                          size="small"
                          variant="outlined"
                          placeholder="Enter your password"
                        />
                      </Grid>
                    </Grid>
                    <label>
                      <Typography sx={labelStyles}>Invite your team</Typography>
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
                        <CustomButton
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
                        </CustomButton>
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
                    <Box sx={{ textTransform: "capitalize" }}>
                      Setup Profile
                    </Box>
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

export default OPForm;
