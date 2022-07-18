import React from "react";
import Styles from "./ResetPasswordComp.module.css";
import ResetPasswordFrom from "../RestPasswordForm/RestPasswordForm";
import LoginGreenSide from "../LoginGreenSide/LoginGreenSide";

function ResetPasswordComp() {
  return (
    <>
      <div className={Styles.container}>
        <LoginGreenSide />
        <ResetPasswordFrom />
      </div>
    </>
  );
}

export default ResetPasswordComp;
