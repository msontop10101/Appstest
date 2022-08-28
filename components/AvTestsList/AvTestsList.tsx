import React from "react";
import { Typography, Card, CardActions, CardContent, Box, Grid } from "@mui/material";
import { availableTests } from "../../files/data";
import CustomButton from "../CustomButton/CustomButton";
import GreenBtn from "../General/GreenBtn"
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import LanguageIcon from "@mui/icons-material/Language";

const AvTestsList = () => {
  const header = {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "20px",
  };
  const cardContainer = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  const cardStyle = {
    width: 250,
  };
  const cardContentHead = {
    backgroundColor: "rgba(0, 105, 11, 0.1)",
    position: "relative",
  };
  const ccHText = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "25px",
  };
  const ccHIcon = {
    backgroundColor: "green",
    color: "white",
    minWidth: "40px",
    minHeight: "40px",
    padding: "5px",
    borderBottomLeftRadius: "7px",
  };
  const ccHIconContainer = {
    position: "absolute",
    right: "0px",
  };
  const buttonStyles = {
    fontSize: "1.2rem",
    // width: {
    //   sm: 200,
    // },
    marginTop: 2,
    padding: 1,
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const removePadding = {
    padding: "0px",
  };
  const cardBody = {
    padding: "8px",
  };
  const bodyDetails = {
    display: "flex",
    margin: "10px 0px 10px 0px",
  };
  const result = {
    fontWeight: "bold",
  };
  return (
    <>
      <Typography sx={header}>Available Tests</Typography>
      <Grid container sx={cardContainer} spacing={3}>
        {availableTests.map((test, index) => {
          return (
            <Grid key={index} item xs={2} sm={3}>
                <Card sx={cardStyle}>
              <CardContent sx={removePadding}>
                <Box sx={cardContentHead}>
                  <Box sx={ccHIconContainer}>
                    {test.type == "android" ? (
                      <AdbIcon sx={ccHIcon} />
                    ) : test.type == "ios" ? (
                      <AppleIcon sx={ccHIcon} />
                    ) : test.type == "web" ? (
                      <LanguageIcon sx={ccHIcon} />
                    ) : (
                      <Typography sx={ccHIcon}>API</Typography>
                    )}
                  </Box>
                  <Typography sx={ccHText} color="primary">
                    {test.name}
                  </Typography>
                </Box>
                <Box sx={cardBody}>
                  {test.type == "web" ? (
                    <Box sx={bodyDetails}>
                      <Typography>Browser Type: </Typography>
                      <Typography sx={result}>{test.version}</Typography>
                    </Box>
                  ) : (
                    <Box sx={bodyDetails}>
                      <Typography>Minimum Version: </Typography>
                      <Typography sx={result}>{test.version}</Typography>
                    </Box>
                  )}
                  <Box sx={bodyDetails}>
                    <Typography>Total Bugs: </Typography>
                    <Typography sx={result}>{test.totalbugs}</Typography>
                  </Box>
                  <Box sx={bodyDetails}>
                    <Typography>My submitted bugs: </Typography>
                    <Typography sx={result}>{test.submitted}</Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={removePadding}>
                <CustomButton
                  color="primary"
                  size="small"
                  variant="contained"
                  sx={buttonStyles}
                  fullWidth={true}
                  type="submit"
                >
                  <Typography>
                    <Box sx={{ textTransform: "capitalize" }}>View Details</Box>
                  </Typography>
                </CustomButton>
              </CardActions>
            </Card>
            </Grid>
          );
        })}
      </Grid >
    </>
  );
};

export default AvTestsList;
