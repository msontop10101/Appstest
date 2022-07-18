import React from "react";
import PSetupForm from "../PSetupForm/PSetupForm";
import PSetupGreenSide from "../PSetupGreenSide/PSetupGreenSide";
import Styles from "./ProfileSetupComp.module.css";

function ProfileSetupComp() {
  return (
    <>
      <div className={Styles.container}>
        <PSetupGreenSide />
        <PSetupForm />
      </div>
    </>
  );
}

export default ProfileSetupComp;
