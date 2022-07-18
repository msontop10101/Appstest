import React from "react";
import OPForm from "../OPFrom/OPFrom";
import OPGreenSide from "../OPGreenSide/OPGreenside";
import Styles from "./OrganisationProfileSetupComp.module.css";

function OrganisationProfileSetupComp() {
  return (
    <>
      <div className={Styles.container}>
        <OPGreenSide />
        <OPForm />
      </div>
    </>
  );
}

export default OrganisationProfileSetupComp;
