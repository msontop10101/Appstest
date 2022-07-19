import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import LoginGreenSide from "../LoginGreenSide/LoginGreenSide";
import styles from "./LoginComp.module.css";
import WhiteMBa from "../MobileBackground/WhiteMBa";
import MLoginInfoSec from "../LoginInfoSec/MLoginInfoSec";

function LoginComp() {
  return (
    <>
      <div className={styles.container}>
        <LoginGreenSide />
        <LoginForm />
      </div>
      <div className={styles.mcontainer}>
        <WhiteMBa>
          <div>
            <LoginForm />
            <MLoginInfoSec />
          </div>
        </WhiteMBa>
      </div>
    </>
  );
}

export default LoginComp;
