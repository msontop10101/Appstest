import React from "react";
import OPForm from "../OrganisationProfileFrom/OrganisationProfileFrom";
import OPGreenSide from "../OrganisationProfileGreenSide/OrganisationProfileGreenside";
import Styles from "./OrganisationProfileSetupComp.module.css";
import {Box} from "@mui/material"

function OrganisationProfileSetupComp() {
  const container = {
    display: "flex",
}
  return (
    <>
      <Box sx={container}>
        <OPGreenSide /> 
        <OPForm />
      </Box>
    </>
  );
}

export default OrganisationProfileSetupComp;
