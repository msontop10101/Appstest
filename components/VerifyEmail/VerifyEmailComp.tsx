import React from "react";
import Styles from "./VerifyEmailComp.module.css";
import VerifyEmailBox from "../VerifyEmailBox/VerifyEmailBox";
import MobileEmailBg from "../MobileEmailBG/MobileEmailBg";

function VerifyEmailComp() {
  return (
    <>
      <div className={Styles.container}>
        <VerifyEmailBox />
      </div>
      <div className={Styles.mcontainer}>
        <MobileEmailBg>
          <VerifyEmailBox />
        </MobileEmailBg>
      </div>
    </>
  );
}

export default VerifyEmailComp;
