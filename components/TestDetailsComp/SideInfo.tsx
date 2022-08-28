import React from "react";
import { Typography, Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const SideInfo = () => {
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
          <LanguageIcon
            style={{
              color: "white",
              minWidth: "50px",
              height: "50px",
              padding: "7px",
              backgroundColor: "black",
              borderBottomRightRadius: "10px",
            }}
          />
        </Box>
        <Box sx={secContainer}>
          <Box sx={section}>
            <Typography>Total Bugs</Typography>
            <Typography sx={result}>15</Typography>
          </Box>
          <Box sx={section}>
            <Typography>My submitted bug</Typography>
            <Typography sx={result}>2</Typography>
          </Box>
          <Box sx={section}>
            <Typography>Browser Type</Typography>
            <Typography>......</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideInfo;
