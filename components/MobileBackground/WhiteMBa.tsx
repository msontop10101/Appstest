import React from "react";
import Styles from "./WhiteMBa.module.css";
import Link from "next/link";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { RLoginIcons } from "../../files/data";

type Props = {
  children: JSX.Element;
};

const WhiteMBa: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.contentContainer}>
          <div className={Styles.header}>
            <div className={Styles.backIcon}>
              <Link href="/">
                <a>
                  <KeyboardBackspaceIcon sx={{ color: "#00690B" }} />
                </a>
              </Link>
            </div>
            <div className={Styles.logo}>
              <Image src={RLoginIcons[0]} alt="logo" />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default WhiteMBa;
