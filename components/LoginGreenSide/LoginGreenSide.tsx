import React from "react";
import Styles from "./LoginGreenSide.module.css";
import { LoginGreenSideText, LoginGreenSideIcons } from "../../files/data";

import { Typography } from "@mui/material";

import Image from "next/image";

function LoginGreenSide() {
  const headerOne = {
    fontSize: 24,
    fontWeight: "bold",
  };
  const headerTwo = {
    fontSize: 15,
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.containerContent}>
        <div className={Styles.contentWrapper}>
          <div>
            {LoginGreenSideText.map((content, index) => {
              const { head, body } = content;
              return (
                <div key={index}>
                  <div className={Styles.headerTexts}>
                    <div>
                      <Typography sx={headerOne}>{head}</Typography>
                    </div>
                    <div>
                      <Typography sx={headerTwo}>{body}</Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={Styles.iconsContainer}>
            {LoginGreenSideIcons.map((icons, index) => {
              const { icon, name } = icons;
              return (
                <div key={index}>
                  <div className={Styles.icons}>
                    <Image src={icon} alt="icons" />
                    <div>
                      <Typography>{name}</Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginGreenSide;
