import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Header from "./Header";
import DashDrawer from "../Dashboard/DashboardDrawer/DashboardDrawer";
import Cards from "./Cards";
import website from "../../Assets/Images/Reports/chart.png";
import windows from "../../Assets/Images/Reports/windows.png";
import report from "../../Assets/Images/Reports/reportchart.png";
import Image from "next/image";
import Ratios from "./Ratios";
import ReportTable from "./ReportTable"

const ReportComp = () => {
  const webStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
  };
  const infoContainer = {
    padding: "20px 35px 15px 35px",
  };
  const subHead = {
    fontSize: "small",
    color: "rgba(0, 0, 0, 0.6)",
    fontWeight: "400",
  };
  const info = {
    fontWeight: "500",
    fontSize: "16px",
  };
  const centerlized = {
    display: "flex",
    alignItems: "center",
  };
  const container = {
    display: "flex",
    justifyContent: "space-between",
    mt: 3
  };
  const colorBox = {
    width: "20px",
    height:"20px",
    borderRadius:"5px",
    mr: 1
  }
  const reportGraphInfo = {
    fontSize:"14px"
  }

  return (
    <>
      <DashDrawer>
        <Box>
          <Header />
          <Box sx={container}>
            <Box sx={{ width: "48%" }}>
              <Cards>
                <Box>
                  <Box sx={webStyle}>
                    <Image width="55px" height="40px" src={website} alt="web" />
                  </Box>
                  <Box sx={infoContainer}>
                    <Grid container spacing={3}>
                      <Grid item sm={6}>
                        <Typography sx={subHead}>Start time</Typography>
                        <Typography sx={info}>2nd April 2022 6:15pm</Typography>
                      </Grid>
                      <Grid item sm={6}>
                        <Typography sx={subHead}>Agent</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Image src={windows} alt="windows" />
                          <Typography
                            sx={{ ml: 1, fontWeight: "500", fontSize: "14px" }}
                          >
                            Windows 10 Agent
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item sm={6}>
                        <Typography sx={subHead}>Total duration</Typography>
                        <Typography sx={info}>00:01:12:322</Typography>
                      </Grid>
                      <Grid item sm={6}>
                        <Typography sx={subHead}>Total tests</Typography>
                        <Typography sx={info}>3</Typography>
                      </Grid>
                      <Grid item sm={6}>
                        <Typography sx={subHead}>Executed by tester</Typography>
                        <Typography sx={info}>Idris Munmi</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Cards>
            </Box>
            <Box sx={{ width: "48%" }}>
              <Cards>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "small",
                      color: "rgba(0, 0, 0, 0.6)",
                      fontWeight: "400",
                      ml: 4
                    }}
                  >
                    Tests Statistics
                  </Typography>
                  <Box sx={centerlized}>
                    <Image width="400px" height="400px" src={report} alt="report chart" />
                    <Box sx={centerlized}>
                      <Grid container spacing={2}>
                        <Grid item sm={6} sx={centerlized}>
                            <Box
                              sx={colorBox} style={{backgroundColor:"red"}}
                            ></Box>
                            <Typography sx={reportGraphInfo}>Critical (0%)</Typography>
                        </Grid>
                        <Grid item sm={6} sx={centerlized}>
                            <Box
                             sx={colorBox} style={{backgroundColor:"orange"}}
                            ></Box>
                            <Typography sx={reportGraphInfo}>High (0%)</Typography>
                        </Grid>
                        <Grid item sm={6} sx={centerlized}>
                            <Box
                              sx={colorBox} style={{backgroundColor:"yellow"}}
                            ></Box>
                            <Typography sx={reportGraphInfo}>Medium (0%)</Typography>
                        </Grid>
                        <Grid item sm={6} sx={centerlized}>
                            <Box
                              sx={colorBox} style={{backgroundColor:"blue"}}
                            ></Box>
                            <Typography sx={reportGraphInfo}>Low(0%)</Typography>
                        </Grid>
                        <Grid item sm={6} sx={centerlized}>
                            <Box
                              sx={colorBox} style={{backgroundColor:"lightgreen"}}
                            ></Box>
                            <Typography sx={reportGraphInfo}>Passed (90%)</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Cards>
            </Box>
          </Box>
          <Ratios/>
          <ReportTable/>
        </Box>
      </DashDrawer>
    </>
  );
};

export default ReportComp;
