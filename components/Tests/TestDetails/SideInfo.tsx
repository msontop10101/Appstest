import React from "react";
import { Typography, Box } from "@mui/material";


const SideInfo = (props:any) => {
  const result = {
    fontWeight: "bold",
    backgroundColor: "#0080004a",
    width: "50px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  };
  const section = {
    margin: "10px 0px 10px 0px",
  };
  const secContainer = {
    paddingLeft: "10px",
  };
  return (
    <>
      <Box>
        <Box>
          {props.heading}
        </Box>
        <Box sx={secContainer}>
          <Box sx={section}>
            <Typography>{props.titleOne}</Typography>
            <Typography sx={result}>{props.one}</Typography>
          </Box>
          <Box sx={section}>
            <Typography>{props.titleTwo}</Typography>
            <Typography sx={result}>{props.two}</Typography>
          </Box>
          <Box sx={section}>
            <Typography>{props.titleThree}</Typography>
            <Typography>{props.three}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideInfo;
