import React from "react";
import { LoginGreenSideText, LoginGreenSideIcons } from "../../../../files/data";

import { Typography, Box } from "@mui/material";

import Image from "next/image";

const MobileLoginInfoSec:any = () => {
  const info = {
    fontSize: 12,
  };
  const container = {
    color: "#00690B",
    marginTop: "20px",
}
const textStyle = {
    textAlign: "center",
}
const iconsPStyles = {
    display: "flex",
    justifyContent: "center",
}
const widthContainer = {
    width: "80%",
    marginTop: "15px",
}
const iconsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
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
  return (
    <>
      <Box sx={container}>
        <Box>
          {LoginGreenSideText.map((info, index) => {
            const { body } = info;
            return (
              <Box key={index} sx={textStyle}>
                <Typography sx={info}>{body}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box sx={iconsPStyles}>
          <Box sx={widthContainer}>
            <Box sx={iconsContainer}>
              {LoginGreenSideIcons.map((icons, index) => {
                const { icon, name } = icons;
                return (
                  <Box key={index}>
                    <Box sx={icons}>
                      <Image width={50} height={50} src={icon} alt="icons" />
                      {/* //iconsdiv */}
                      <Box sx={iconsContent}>
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
    </>
  );
};

export default MobileLoginInfoSec;
