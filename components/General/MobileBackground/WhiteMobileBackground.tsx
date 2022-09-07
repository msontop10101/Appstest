import React from "react";
// import Styles from "./WhiteMobileBackground.module.css";
import Styles from "./WhiteMobileBackground.module.css"
import Link from "next/link";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { RLoginIcons } from "../../../files/data";
import {Box} from "@mui/material"

type Props = {
  children: JSX.Element; 
};

const WhiteMobileBackground: React.FC<Props> = ({ children }) => {
  const container = {
    backgroundColor: "#ffffff",
    padding: "20px",
}
const formContainer = {
    backgroundColor: "#00690B",
    border: "1px solid gray",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
}
const header = {
    display: "flex",
    padding:" 15px 0px 15px 0px",
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
                  <KeyboardBackspaceIcon sx={{ color: "#00690B" }} />
                </a>
              </Link>
            </Box>
            <Box sx={logo}>
              <Image src={RLoginIcons[0]} alt="logo" />
            </Box>
          </Box>
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default WhiteMobileBackground;
