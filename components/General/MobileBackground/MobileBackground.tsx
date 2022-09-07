import React from "react";
import Styles from "./MobileBackground.module.css";
import Link from "next/link";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { LoginFormImgs } from "../../../files/data";
import {Box} from "@mui/material"

type Props = {
  children: JSX.Element;
};

const MobileBackground: React.FC<Props> = ({ children }) => { 
  const container = {
    backgroundColor: "#00690B",
    padding: "20px",
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
    position: "relative",
}
const backIcon = {
    paddingLeft: "2%",
}
const logo = {
    position: "absolute",
    left: "30%",
}
  return (
    <>
      <Box sx={container}>
        <Box>
          <Box sx={header}>
            <Box sx={backIcon}>
              <Link href="/">
                <a>
                  <KeyboardBackspaceIcon sx={{ color: "white" }} />
                </a>
              </Link>
            </Box>
            <Box sx={logo}>
              <Image src={LoginFormImgs[8]} alt="logo" />
            </Box>
          </Box>
          <Box sx={formContainer}>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileBackground;
