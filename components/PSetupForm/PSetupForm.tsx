import React from "react";
import Styles from "./PSetupForm.module.css";
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

function PSetupForm() {
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
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.containerContent}>
          <div className={Styles.contentWrapper}>
            <div className={Styles.headerContent}>
              <div className={Styles.headerTexts}>
                <div className={Styles.headerOne}>
                  <Typography sx={headerOne} variant="h6">
                    Setup your profile
                  </Typography>
                </div>
                <div>
                  <Typography sx={headerMsg}>
                    Please fill in your details to create your profile
                  </Typography>
                </div>
              </div>
            </div>
            <div className={Styles.formContainer}>
              <Grid container rowSpacing={1.5} columnSpacing={2}>
                <Grid item xs={6}>
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
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="Enter your first name"
                  />
                </Grid>
                <Grid item xs={6}>
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
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="Enter your last name"
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
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="Enter your work email address"
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
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="9029855826"
                  />
                </Grid>
              </Grid>
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
                      <Link href="../../OrganisationProfileSetup">
                        <a>Proceed</a>
                      </Link>
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

export default PSetupForm;
