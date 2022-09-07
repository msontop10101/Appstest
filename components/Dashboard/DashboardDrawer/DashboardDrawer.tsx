import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
import Styles from "./DashboardDrawer.module.css";
import Image from "next/image";
import { DImages, DashNavElements, appbarIcons } from "../../../files/data";
import DashContent from "../DashboardContent/DashboardContent";
import Link from "next/link";

type Props = {
  children: JSX.Element;
};

const drawerWidth = 240;

const DashDrawer: React.FC<Props> = ({ children }) => {
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
  const navStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems:"center",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    '&:hover': {
      backgroundColor: "#00800012"
    }
  };
  const linkStyle = {
    color: "rgba(0, 0, 0, 0.5)"
  }
  const fullOpenStyle = {
    marginLeft: "50px",
}
const active = {
    backgroundColor: "rgba(0, 105, 11, 0.1)",
}

const listText = {
    marginLeft: "10px",
    display: {
      sm: "none",
      xs: "block"
    }
}

const listTextDisplay = {
    marginLeft: "10px",
    display: {
      sm: "block",
      xs: "none"
    },
}

const toolbarHeaderInner = {
    margin: "40px",
    display: {
      sm: "block",
      xs:"none",
    }
}

const appbarIconsContainer = {
    display: {
      sm: "flex",
      xs: "none"
    },
    marginLeft: "auto",
}

const appbarIcon = {
    marginLeft: "15px",
    cursor: "pointer",
}

const userProfile = {
    display: "flex",
    marginRight: "50px",
}
const appbarMobileLogo = {
    display: {
      sm: "none",
      xs: "flex",
    },
    justifyContent: {
      sm: "initial",
      xs: "space-between"
    },
    alignItems: {
      sm: "initial",
      xs: "center",
    },
    width: {
      sm: "initial",
      xs: "100%"
    }
}
const listContainer = {
  position: {
    sm: "initial",
    xs: "relative"
  }
}
const forwardIcon = {
  position: {
    sm: "initial",
    xs: "absolute",
  },
  left: "70px",
  zIndex: "5",
}
const backwardIcon = {
  position: {
    sm: "initial",
    xs: "absolute",
  },
  left: "150px"
}



  const drawerWidth = 240;

  const drawer = (
    <Box sx={listContainer}>
      <Toolbar sx={toolbarHeader}>
        <Box sx={toolbarHeaderInner}>
          <Image src={DImages[0]} alt="logo" />
        </Box>
      </Toolbar>
      <Divider />
      {fullOpen ? (
        <IconButton
          edge="start"
          onClick={handleDrawerClose}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Box sx={backwardIcon}>
            <Avatar sx={avatarStyle}>
              <ArrowBackIosNewIcon sx={arrowIconStyle} />
            </Avatar>
          </Box>
        </IconButton>
      ) : (
        <IconButton
          edge="start"
          onClick={handleFullOpen}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Box sx={forwardIcon}>
            <Avatar sx={avatarStyle}>
              <ArrowForwardIosIcon sx={arrowIconStyle} />
            </Avatar>
          </Box>
        </IconButton>
      )}
      {/* <List>
        {DashNavElements.map((elements, index) => {
          const { icon, name, link } = elements;
          return (
            <ListItem key={index}>
              <Link href={link}>
                <a>
                <ListItemButton>
                <ListItemIcon sx={iconStyle}>
                  <Image src={icon} alt="icons" />
                </ListItemIcon>
                <Box className={Styles.listText}>
                  {fullOpen && <ListItemText primary={name} />}
                </Box>
                <Box className={Styles.listTextDisplay}>
                  <ListItemText primary={name} />
                </Box>
              </ListItemButton>
                </a>
              </Link>
            </ListItem>
          );
        })}
      </List> */}
      <Grid container>
        {DashNavElements.map((elements, index) => {
          const { icon, name, link } = elements;
          return (
            <Grid item key={index} sm={12}>
              <Link href={link}>
                <a>
                  <Box sx={navStyle}>
                      <Image src={icon} alt="navIcons" />
                    <Box sx={listText}>
                      {fullOpen && <Typography sx={linkStyle}>{name}</Typography>}
                    </Box>
                    <Box sx={listTextDisplay}>
                      <Typography sx={linkStyle}>{name}</Typography>
                    </Box>
                  </Box>
                </a>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
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
          <Box sx={appbarMobileLogo}>
            <Box>
              <Image src={DImages[0]} alt="logo" />
            </Box>
            <Box>
              <MenuIcon />
            </Box>
          </Box>
          <Box sx={appbarIconsContainer}>
            {appbarIcons.map((icons, index) => {
              const { icon } = icons;
              return (
                <Box key={index} sx={appbarIcon}>
                  <Image src={icon} alt="icon" />
                </Box>
              );
            })}
            <Box sx={userProfile}>
              <Typography sx={{ ml: 2, mr: 0.5, fontSize: 15 }}>
                Admorin Ajepe
              </Typography>
              <ArrowDropDownOutlinedIcon />
            </Box>
          </Box>
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
        <Box>
          {/* <DashContent /> */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashDrawer;
