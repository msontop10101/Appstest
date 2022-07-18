import React from "react";
import Styles from "./MobileEmailBg.module.css";
import Link from "next/link";
import Image from "next/image";
import { LoginFormImgs } from "../../files/data";

type Props = {
  children: JSX.Element;
};

const MobileEmailBg: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.contentContainer}>
          <div className={Styles.header}>
            <div className={Styles.logo}>
              <Image src={LoginFormImgs[8]} alt="logo" />
            </div>
          </div>
          <div className={Styles.formContainer}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default MobileEmailBg;
