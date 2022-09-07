import React, { useState, useContext } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  Box,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import AdbOutlinedIcon from "@mui/icons-material/AdbOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { deviceVersions } from "../../../../files/data";
import { navContext } from "../CreateTestModal/CreateTestModal";

const ApiStepThree = (props: any) => {
  const [version, setVersion] = useState<number | string>();
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
    textAlign: "left",
    margin: "10px 0px 10px 0px",
  };
  const eleAlign = {
    display: "flex",
    margin: "10px 0px 5px 0px",
    alignItems: "center",
  };
  const textStyles = {
    fontSize: "14px",
    fontWeight: "bold",
  };
  const nav = useContext(navContext);
  return (
    <>
      <div>
        <label>
          <Typography sx={labelStyle}>
            Do you have the resource deploy URL?
          </Typography>
        </label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="https://example.appstest/web"
          sx={textFieldStyle}
        />
        <Box sx={eleAlign}>
          <Typography color="primary" sx={textStyles}>
            Available in stores
          </Typography>
          <HelpOutlineIcon color="primary" sx={{ marginLeft: "5px" }} />
        </Box>

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

export default ApiStepThree;
