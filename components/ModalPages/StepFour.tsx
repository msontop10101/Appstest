import React, { useState, useContext } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import Styles from "./StepFour.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { navContext } from "../CreateTestModal/CreateTestModal";

const StepFour = () => {
  const label = {
    marginBottom: "5px",
    marginTop: "15px",
    fontWeight: "bold",
    textAlign: "left",
  };
  const inviteBtn = {
    fontSize: "1.2rem",
    minWidth: {
      sm: 100,
    },
    padding: 0.8,
    display: {
      xs: "none",
      sm: "block",
    },
  };
  const inviteBtn2 = {
    fontSize: "1.2rem",
    minWidth: {
      sm: 100,
    },
    padding: 0.8,
    display: {
      xs: "block",
      sm: "none",
    },
  };
  const textFieldStyle = {
    ".MuiOutlinedInput-root": {
      paddingRight: "0px",
    },
    "& .MuiInputBase-root": {
      border: "1px solid gray",
      borderRadius: "0px 5px 5px 0px",
    },
  };
  const labelStyle = {
    fontWeight: "bold",
    textAlign: "left",
    margin: "10px 0px 10px 0px",
  };
  const eleAlign = {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px 5px 0px",
  };
  const nav = useContext(navContext);
  return (
    <>
      <div className={Styles.enterNameContainer}>
        <Typography sx={label}>Test Credential</Typography>
        <input
          placeholder="Provide test credentials"
          className={Styles.inputField}
        />
      </div>
      <Typography sx={label}>
        Where do you want to get your notification update?
      </Typography>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Slack"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Jira"
          labelPlacement="end"
        />
      </FormGroup>
      <Typography sx={label}>Invite your team</Typography>
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
        <Grid item xs={5}>
          <TextField
            sx={textFieldStyle}
            fullWidth
            id="outlined-basic"
            size="small"
            variant="outlined"
            placeholder="Member"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    sx={inviteBtn}
                    fullWidth={true}
                  >
                    <Typography>
                      <Box
                        sx={{
                          textTransform: "capitalize",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "2px",
                        }}
                      >
                        Invite
                      </Box>
                    </Typography>
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={inviteBtn2}
            fullWidth={true}
          >
            <Typography>
              <Box
                sx={{
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                }}
              >
                Invite
              </Box>
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Typography sx={label}>Schedule Test</Typography>
        <Grid item xs={10}>
          <TextField
            sx={{
              "& .MuiInputBase-root": {
                border: "1px solid gray",
              },
            }}
            fullWidth
            id="outlined-basic"
            size="small"
            variant="outlined"
            placeholder="dd/mm/yyyy"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarMonthIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default StepFour;
