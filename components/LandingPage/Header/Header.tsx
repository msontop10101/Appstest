import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../Assets/Images/Header/logo.png";
import GreenBtn from "../../General/GreenBtn";

const Header = () => {
  const place = {
      padding: {
        sm: "0px 20px 0px 20px",
        xs: "0px 2px 0px 2px"
      },
      background: "inherit",
      backdropFilter:"blur(5px)"
  }
  const spread = {
    display: "flex",
    justifyContent: "space-between",
  }
  return (
    <div>
      <AppBar
        sx={place}
        elevation={1}
      >
        <Toolbar sx={spread}>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Image src={logo} alt="logo" />
          </IconButton>
          <Link href="../../Login">
            <a style={{textDecoration:"none"}}>
              <GreenBtn>Login</GreenBtn>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
