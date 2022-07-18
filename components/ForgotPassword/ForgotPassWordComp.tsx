import React from "react";
import Styles from "./ForgotPassWordComp.module.css";
import ForgotPswdForm from "../ForgotPswdForm/ForgotPswdForm";
import LoginGreenSide from "../LoginGreenSide/LoginGreenSide";

function ForgotPassWordComp() {
  return (
    <>
      <div className={Styles.container}>
        <LoginGreenSide />
        <ForgotPswdForm />
      </div>
    </>
  );
}

export default ForgotPassWordComp;
