import React from "react";

//STYLES
import styles from "./Header.module.css";

//MATERIAL UI
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

//NEXT JS
import Image from "next/image";
import Link from "next/link";

//IMAGES FROM FOLDER
import logo from "../../Assets/Images/Header/logo.png";

//COMPONENTS
import GreenBtn from "../General/GreenBtn";

function Header() {
  return (
    <div>
      <AppBar
        style={{ background: "inherit" }}
        sx={{ backdropFilter: "blur(20px)" }}
        className={styles.place}
      >
        <Toolbar className={styles.spread}>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Image src={logo} alt="logo" />
          </IconButton>
          <Link href="../../Login">
            <a>
              <GreenBtn>Login</GreenBtn>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
