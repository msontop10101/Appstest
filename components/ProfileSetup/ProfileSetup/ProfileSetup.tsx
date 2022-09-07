import React from "react";
import PSetupForm from "../ProfileSetupForm/ProfileSetupForm";
import PSetupGreenSide from "../ProfileSetupGreenSide/ProfileSetupGreenSide";
import Styles from "./ProfileSetupComp.module.css";
import {Box} from "@mui/material"

function ProfileSetupComp() {
  const container = {
    display: "flex",
}
  return (
    <>
      <Box sx={container}>
        <PSetupGreenSide />
        <PSetupForm /> 
      </Box>
    </>
  );
}

export default ProfileSetupComp;
