import React from "react";
import DashCard from "../DashboardCard/DashboardCard";
import {Box, Typography} from "@mui/material"
import DashCards from "../DashboardCards/DashCards";
import { steps, hr } from "../../../files/data";
import SideCards from "../DashboardCards/SideCards";

const DashContent = () => {
  const header = {
    fontSize: "1.4rem",
    fontWeight: "bold",
    margin: "5px 0px 25px 0px",
  };
  const dashInfo = {
    fontSize: 15,
    marginBottom: "25px",
  };
  const subHeading1 = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "25px 0px 25px 0px",
  };
  const subHeading2 = {
    fontWeight: "bold",
    margin: {
      sm: "-25px 0px 5px 0px",
      xs: "15px 0px 15px 0px",
    },
  };
  const hInfo = {
    width: {
      sm: "55%",
      xs: "100%"
    },
}
const side = {
    marginBottom: "25px",
}
const container = {
    display: {
      sm: "flex",
      xs: "block",
    },
}
const rightSide = {
    display: "flex",
    width: {
      sm: "70%",
      xs: "100%"
    },
}
const leftSide = {
    display: "flex",
    width: {
      sm: "20%",
      xs: "100%"
    },
    marginLeft: {
      sm: "25px",
      xs: "0px"
    },
    marginTop: {
      sm: "0px",
      xs: "5px"
    }
}

  return (
    <>
      <Box sx={hInfo}>
        <Typography sx={header}>Welcome to AppsTest!</Typography>
        <Typography sx={dashInfo}>
          We are a platform of software testers. Take your time to learn about
          our platform and our rules - you don&apos;t have to rush anything
        </Typography>
      </Box>
      <Box sx={container}>
        <Box sx={rightSide}>
          <Box>
            <DashCard />
            <Box>
              <Typography sx={subHeading1}>Onboarding Steps</Typography>
              <DashCards steps={steps} />
            </Box>
          </Box>
        </Box>
        <Box sx={leftSide}>
          <Box>
            <Typography sx={subHeading2}>Help & Resources</Typography>
            <Box sx={side}>
              <SideCards
                bgColor="rgba(0, 105, 11, 0.1)"
                headtext={hr[0].head}
                bodytext={hr[0].body}
                button={hr[0].button}
              />
            </Box>
            <Box sx={side}>
              <SideCards
                bgColor="rgba(239, 68, 68, 0.1)"
                headtext={hr[1].head}
                bodytext={hr[1].body}
                button={hr[1].button}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashContent;
