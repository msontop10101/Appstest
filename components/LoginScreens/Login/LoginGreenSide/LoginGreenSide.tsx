import React from "react";
import { LoginGreenSideText, LoginGreenSideIcons } from "../../../../files/data";

import { Typography, Box } from "@mui/material";

import Image from "next/image";

function LoginGreenSide() {
  const headerOne = {
    fontSize: 24,
    fontWeight: "bold", 
  };
  const headerTwo = {
    fontSize: 15,
  };
  const container = {
    backgroundColor: "#00690B",
    color: "white",
    padding: "20px",
    display: {
      sm: "block",
      xs: "none",
    }
}
const containerContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginBottom: "20px",
}
const contentWrapper = {
    width: "70%",
}
const iconsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "40px",
    justifyItems: "center",
    alignItems: "center",
}
const icons = {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
}
const iconsContent = {
    marginLeft: "10px",
}
const headerTextsContent = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
}
  return (
    <Box sx={container}>
      <Box sx={containerContent}>
        <Box sx={contentWrapper}>
          <Box>
            {LoginGreenSideText.map((content, index) => {
              const { head, body } = content;
              return (
                <Box key={index}>
                  <Box sx={headerTextsContent}>
                    <Box>
                      <Typography sx={headerOne}>{head}</Typography>
                    </Box>
                    <Box>
                      <Typography sx={headerTwo}>{body}</Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={iconsContainer}>
            {LoginGreenSideIcons.map((icons, index) => {
              const { icon, name } = icons;
              return (
                <Box key={index}>
                  <Box sx={icons}>
                    <Image src={icon} alt="icons" />
                    <Box>
                      <Typography>{name}</Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginGreenSide;
