import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Styles from "./DashDrawer.module.css";
import Image from "next/image";
import { DImages, DashNavElements, appbarIcons } from "../../files/data";
import DashContent from "../DashContent/DashContent";

const drawerWidth = 240;

const DashDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [miniOpen, setMiniOpen] = useState(false);
  const [fullOpen, setFullOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(true);
    setMiniOpen(true);
  };
  const handleMiniOpen = () => {
    setMiniOpen(!miniOpen);
  };
  const handleFullOpen = () => {
    setFullOpen(true);
    setMiniOpen(true);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    setMiniOpen(false);
    setFullOpen(false);
  };
  const iconStyle = {
    minWidth: "initial",
  };
  const removeBd = {
    "& .MuiBackdrop-root": {
      display: "none",
    },
    display: { xs: "block", sm: "none" },
  };
  const toolbarHeader = {
    backgroundColor: "#00690B",
    padding: 3,
  };
  const avatarStyle = {
    backgroundColor: "white",
  };
  const arrowIconStyle = {
    color: "#00690B",
  };

  const drawerWidth = 240;

  const drawer = (
    <div className={Styles.listContainer}>
      <Toolbar sx={toolbarHeader}>
        <div className={Styles.toolbarHeader}>
          <Image src={DImages[0]} alt="logo" />
        </div>
      </Toolbar>
      <Divider />
      {fullOpen ? (
        <IconButton
          edge="start"
          onClick={handleDrawerClose}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <div className={Styles.backwardIcon}>
            <Avatar sx={avatarStyle}>
              <ArrowBackIosNewIcon sx={arrowIconStyle} />
            </Avatar>
          </div>
        </IconButton>
      ) : (
        <IconButton
          edge="start"
          onClick={handleFullOpen}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <div className={Styles.forwardIcon}>
            <Avatar sx={avatarStyle}>
              <ArrowForwardIosIcon sx={arrowIconStyle} />
            </Avatar>
          </div>
        </IconButton>
      )}
      <List>
        {DashNavElements.map((elements, index) => {
          const { icon, name } = elements;
          return (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon sx={iconStyle}>
                  <Image src={icon} alt="icons" />
                </ListItemIcon>
                <div className={Styles.listText}>
                  {fullOpen && <ListItemText primary={name} />}
                </div>
                <div className={Styles.listTextDisplay}>
                  <ListItemText primary={name} />
                </div>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: 50,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <div className={Styles.appbarMobileLogo}>
            <div>
              <Image src={DImages[0]} alt="logo" />
            </div>
            <div>
              <MenuIcon />
            </div>
          </div>
          <div className={Styles.appbarIconsContainer}>
            {appbarIcons.map((icons, index) => {
              const { icon } = icons;
              return (
                <div key={index} className={Styles.appbarIcon}>
                  <Image src={icon} alt="icon" />
                </div>
              );
            })}
            <div className={Styles.userProfile}>
              <Typography sx={{ ml: 2, mr: 0.5, fontSize: 15 }}>
                Admorin Ajepe
              </Typography>
              <ArrowDropDownOutlinedIcon />
            </div>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleFullOpen}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={removeBd}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "none",
              boxShadow: "5px 10px #FAF9F6",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <IconButton
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Avatar sx={avatarStyle}>
            <ArrowForwardIosIcon sx={arrowIconStyle} />
          </Avatar>
        </IconButton>
        <div className={Styles.firstSide}>
          {/* <Typography>Welcome to AppsTest</Typography>
          <Typography paragraph>
            We are a platform of software testers. Take your time to learn about
            the platform and our rules - you don&apos;t have to rush anything
          </Typography> */}
          <DashContent />
        </div>
      </Box>
    </Box>
  );
};

export default DashDrawer;
