import React from "react";
import Styles from "./MobileEmailBg.module.css";
import Link from "next/link";
import Image from "next/image";
import {LoginFormImgs} from "../../../files/data";
import {Box} from "@mui/material"

type Props = {
  children: JSX.Element;
};

const MobileEmailBg: React.FC<Props> = ({ children }) => {
  const container = {
    backgroundColor: "#00690B",
    padding: "20px",
    width: "100%"
}
const formContainer = {
    backgroundColor: "#ffffff",
    border: "1px solid gray",
    borderRadius: "5px",
}
const header = {
    display: "flex",
    padding: "15px 0px 15px 0px",
    alignItems: "center",
    justifyContent: "center",
}
  return (
    <>
      <Box sx={container}>
        <Box >
          <Box sx={header}>
            <Box>
              <Image src={LoginFormImgs[8]} alt="logo" />
            </Box>
          </Box>
          <Box sx={formContainer}>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileEmailBg;
