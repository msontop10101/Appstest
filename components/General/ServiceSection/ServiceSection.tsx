import React from "react";
import { Services } from "../../../files/data";
import Image from "next/image";
import check from "../../../Assets/Images/ServiceSider/check.png";
import IconsList from "../IconsList/IconsList";
import {Box, Typography} from "@mui/material"

const ServiceSection = () => {
  const sectionContainer = {
    backgroundColor: "#00690B",
    color: "white",
    display: {
      sm: "flex",
      xs: "none",
    },
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "100",
    height: "100vh",
    padding: "30px",
    width: "40%",
}
const sectionContents = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const checks = {
    display: "flex",
    alignItems: "center",
    paddingBottom: "10px",
}
const img = {
    paddingRight: "10px",
}
const lastChild = {
    borderTop: "2px solid white",
    paddingTop: "20px",
}

  return (
    <>
      <Box sx={sectionContainer}> 
        <Box sx={sectionContents}>
          <Box >
            <h2>Discover how we can help you</h2>
            <p>We&apos;ve tested over 100+ applications and we can help you:</p>
            <Box>
              {Services.map((service, index) => {
                const { info } = service;
                return (
                  <Box key={index}>
                    <Box sx={checks}>
                      <Box sx={img}>
                        <Image src={check} alt="check" />
                      </Box>
                      <Box>
                        <p>{info}</p>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Typography sx={lastChild}>
              Trusted by amazing development teams in the world
            </Typography>
            <IconsList />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ServiceSection;
