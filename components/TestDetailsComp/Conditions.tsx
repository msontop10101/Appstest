import React from "react";
import { conditions } from "../../files/data";
import { Typography, Box, Grid } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import SideInfo from "./SideInfo";

const bgColorSwitch = (warning: string) => {
  switch (warning) {
    case "red":
      return "#ff000038";
      break;
    case "pink":
      return "#ffc0cb33";
      break;
    case "orange":
      return "#ffa50047";
      break;
    case "blue":
      return "#0000ff47";
      break;
  }
};
const colorSwitch = (warning: string) => {
  switch (warning) {
    case "red":
      return "red";
      break;
    case "pink":
      return "#ffc0c9";
      break;
    case "orange":
      return "orange";
      break;
    case "blue":
      return "blue";
      break;
  }
};

const Conditions = () => {
  const header = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    marginTop: "20px",
  };
  const pageStyle = {
    display: "flex",
  };
  const rightSide = {
    width: "40%",
    display: "flex",
    justifyContent: "center"
  }

  return (
    <>
      <Box sx={pageStyle}>
        <Box>
          <Box>
            <Typography sx={header}>Conditions of this test</Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {conditions.map((condition, index) => {
                const { cau, warn } = condition;
                return (
                  <Grid key={index} item xs={12} sm={6}>
                    <Box
                      sx={{
                        backgroundColor: bgColorSwitch(warn),
                        padding: "20px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <WarningAmberRoundedIcon
                        style={{ color: colorSwitch(warn), marginRight: "5px" }}
                      />
                      {cau}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
        <Box sx={rightSide}>
          <SideInfo />
        </Box>
      </Box>
    </>
  );
};

export default Conditions;
