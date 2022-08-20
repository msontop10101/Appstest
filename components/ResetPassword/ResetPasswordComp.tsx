import React from "react";
import Styles from "./ResetPasswordComp.module.css";
import ResetPasswordFrom from "../RestPasswordForm/RestPasswordForm";
import LoginGreenSide from "../LoginGreenSide/LoginGreenSide";
import WhiteMBa from "../MobileBackground/WhiteMBa";

function ResetPasswordComp() {
  return (
    <>
      <div className={Styles.container}>
        <LoginGreenSide />
        <ResetPasswordFrom />
      </div>
      <div className={Styles.mcontainer}>
        <WhiteMBa>
          <>
            <LoginGreenSide />
            <ResetPasswordFrom />
          </>
        </WhiteMBa>
      </div>
    </>
  );
}

export default ResetPasswordComp;
