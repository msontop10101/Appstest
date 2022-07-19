import React from "react";
import Styles from "./MLoginInfoSec.module.css";
import { LoginGreenSideText, LoginGreenSideIcons } from "../../files/data";

import { Typography } from "@mui/material";

import Image from "next/image";

const MLoginInfoSec = () => {
  const info = {
    fontSize: 12,
  };
  return (
    <>
      <div className={Styles.container}>
        <div>
          {LoginGreenSideText.map((info, index) => {
            const { body } = info;
            return (
              <div key={index} className={Styles.textStyle}>
                <Typography sx={info}>{body}</Typography>
              </div>
            );
          })}
        </div>
        <div className={Styles.iconsPStyles}>
          <div className={Styles.widthContainer}>
            <div className={Styles.iconsContainer}>
              {LoginGreenSideIcons.map((icons, index) => {
                const { icon, name } = icons;
                return (
                  <div key={index}>
                    <div className={Styles.icons}>
                      <Image width={50} height={50} src={icon} alt="icons" />
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
    </>
  );
};

export default MLoginInfoSec;
