import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import AdbOutlinedIcon from "@mui/icons-material/AdbOutlined";
import { deviceVersions } from "../../files/data";

const StepThree = () => {
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

        <Box sx={eleAlign}>
          <AdbOutlinedIcon color="primary" sx={{ marginRight: "5px" }} />
          <Typography sx={labelStyle}>
            Android minimum device version
          </Typography>
        </Box>
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

        <Box sx={eleAlign}>
          <Typography sx={labelStyle}>Is System in Production?</Typography>
        </Box>
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
      </div>
    </>
  );
};

export default StepThree;
