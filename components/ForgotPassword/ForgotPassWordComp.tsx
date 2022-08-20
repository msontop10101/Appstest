import React from "react";
import Styles from "./ForgotPassWordComp.module.css";
import ForgotPswdForm from "../ForgotPswdForm/ForgotPswdForm";
import LoginGreenSide from "../LoginGreenSide/LoginGreenSide";
import WhiteMBa from "../MobileBackground/WhiteMBa";
import MLoginInfoSec from "../LoginInfoSec/MLoginInfoSec";

function ForgotPassWordComp() {
  return (
    <>
      <div className={Styles.container}>
        <LoginGreenSide />
        <ForgotPswdForm />
      </div>
      <div className={Styles.mcontainer}>
        <WhiteMBa>
          <div>
            <ForgotPswdForm />
            <MLoginInfoSec />
          </div>
        </WhiteMBa>
      </div>
    </>
  );
}

export default ForgotPassWordComp;
