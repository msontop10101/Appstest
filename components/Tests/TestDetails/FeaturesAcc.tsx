import React, { useState } from "react";
import { testFeatures } from "../../../files/data";
import { Box, Button, Typography } from "@mui/material";
import Features from "./Features";

const FeaturesAcc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const getIsOpen = (val: any) => {
    setIsOpen(val)
  }

  const submitBtnOnOpen = {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "#00690B",
  };
  const submitBtn = {
    backgroundColor: "#0080004a",
    borderRadius: "5px",
    border: "1px solid white",
    color: "white",
    margin: "15px",
    "&:hover": {
      backgroundColor: "#00690B",
      color: "white",
    },
  };
  const submitText = {
    textTransform: "capitalize",
  };
  return (
    <>
      {testFeatures.map((feature, index) => {
        const { title, location, whatToTest, expected } = feature;
        return (
          <Box key={index}>
            <Features
              title={title}
              location={location}
              whatToTest={whatToTest}
              expected={expected}
              getIsOpen={getIsOpen}
            />
          </Box>
        );
      })}
      {isOpen && (
        <Box sx={submitBtnOnOpen} style={{ width: "100vw" }}>
          <Box>
            <Button variant="outlined" sx={submitBtn}>
              <Box>
                <Typography sx={submitText}>Submit bug</Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FeaturesAcc;
