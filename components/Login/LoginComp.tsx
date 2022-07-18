import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import LoginGreenSide from "../LoginGreenSide/LoginGreenSide";
import styles from "./LoginComp.module.css";

function LoginComp() {
  return (
    <>
      <div className={styles.container}>
        <LoginGreenSide />
        <LoginForm />
      </div>
    </>
  );
}

export default LoginComp;
