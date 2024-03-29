import React, { useState, useContext } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import AdbOutlinedIcon from "@mui/icons-material/AdbOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { deviceVersions } from "../../../../files/data";
import { navContext } from "../CreateTestModal/CreateTestModal";

const StepThree = (props: any) => {
  const [version, setVersion] = useState<number | string>(9.0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVersion(event.target.value);
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
      <div>
        <label>
          <Typography sx={labelStyle}>Upload File</Typography>
        </label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Upload your app file (e.g APK file)"
          sx={textFieldStyle}
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
                        justifyContent: "space-between",
                      }}
                    >
                      <CloudDownloadOutlinedIcon sx={{ marginRight: "5px" }} />
                      Upload
                    </Box>
                  </Typography>
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Grid container>
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
                  Upload
                </Box>
              </Typography>
            </Button>
          </Grid>
        </Grid>

        {nav == "IOS" ? (
          <Box sx={eleAlign}>
            <AppleIcon sx={{ marginRight: "5px" }} />
            <Typography sx={labelStyle}>IOS minimum device version</Typography>
          </Box>
        ) : nav == "Web" ? (
          <Box sx={eleAlign}>
            <AppleIcon sx={{ marginRight: "5px" }} />
            <Typography sx={labelStyle}>Web minimum device version</Typography>
          </Box>
        ) : nav == "API" ? (
          <Box sx={eleAlign}>
            <AppleIcon sx={{ marginRight: "5px" }} />
            <Typography sx={labelStyle}>API minimum device version</Typography>
          </Box>
        ) : nav == "Android" ? (
          <Box sx={eleAlign}>
            <AdbOutlinedIcon sx={{ marginRight: "5px" }} color="primary" />
            <Typography sx={labelStyle}>
              Android minimum device version
            </Typography>
          </Box>
        ) : null}
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          select
          value={version}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          sx={textFieldStyle}
        >
          {deviceVersions.map((option, index) => (
            <option value={option.version} key={index}>
              {option.version}
            </option>
          ))}
        </TextField>

        <FormControl sx={{ textAlign: "left", width: "100%" }}>
          <Box sx={eleAlign}>
            <Typography sx={labelStyle}>Is System in Production?</Typography>
          </Box>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="male" control={<Radio />} label="Yes" />
            <FormControlLabel value="other" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default StepThree;
