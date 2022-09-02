import React from "react";
import { severity } from "../../files/data";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const SubmitBugPage = () => {

  const blueColor = {
    color: "blue",
    "&.Mui-checked": {
      color: "blue",
    },
  };
  const yellowColor = {
    color: "yellow",
    "&.Mui-checked": {
      color: "yellow",
    },
  };
  const orangeColor = {
    color: "orange",
    "&.Mui-checked": {
      color: "orange",
    },
  };
  const redColor = {
    color: "red",
    "&.Mui-checked": {
      color: "red",
    },
  };
 const radioStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  paddingRight: "20px",
  marginLeft: "2px",
 }
  return (
    <>
      <Box>
        <Box>
          <FormControl>
            <RadioGroup row>
              {severity.map((sev, index) => {
                return (
                  <React.Fragment key={index}>
                    <FormControlLabel
                    sx={radioStyle}
                      value={sev.name}
                      control={
                        <Radio
                          sx={
                            sev.name == "Low"
                              ? blueColor
                              : sev.name == "Medium"
                              ? yellowColor
                              : sev.name == "High"
                              ? orangeColor
                              : sev.name == "Critical"
                              ? redColor
                              : null
                          }
                        />
                      }
                      label={sev.name}
                    />
                  </React.Fragment>
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default SubmitBugPage;
