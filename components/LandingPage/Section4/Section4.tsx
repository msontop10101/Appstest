import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Section4.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {Box, Typography} from "@mui/material"

import mobile from "../../../Assets/Images/Section4/mobile.png";

import { LPsection3 } from "../../../files/data";

const Section4 = () => {
  
  useEffect(() => {
    const contents =
      document.getElementById("contents")?.children[1].children[0];
    contents?.classList.add(styles.styler);
    const show =
      document.getElementById("contents")?.children[0].children[0].children[1]
        .children[1];
    show?.classList.remove(styles.hide);
  }, []);
  const sectionContainer = {
    display: "flex",
    margin: "50px 0px 50px 0px",
    justifyContent: "space-between",
    flexDirection : {
      sm: "row",
      xs: "column"
    }
}
const content = {
    display: "flex",
    alignItems: "center",
    color: "#00690B",
    textDecoration: "underline",
}
const contentText = {
    paddingRight: "5px",
    textDecoration: "underline"
}
const sectionTextContent = {
    width: {
      sm: "40%",
      xs: "100%"
    },
}
const smHide = {
  display: {
    sm: "block",
    xs: "none"
  }
}
const headerContent = {
    display: "flex",
    alignItems: "center",
}
const headerContentText = {
    fontWeight: "bolder",
    padding: {
      sm: "20px",
      xs: "1px"
    },
}
const styler = {
    display: "flex",
    flexDirection: "row-reverse",
}
const parentImage = {
  position: "relative",
  paddingBottom: {
    sm: "30px",
    xs: "0px"
  },
  paddingRight: {
    sm: "20px",
    xs: "0px"
  },
  display: {
    sm: "block",
    xs: "flex",
  },
  justifyContent: "center",
}
const pImage = {
  position: "absolute",
  bottom: "0px",
  right: "0px",
}
const hide = {
  display: "none",
}
const sectionTextContentLink = {
  textDecoration: "none",
}
  return (
    <>
      <Box id="contents">
        {LPsection3.map((content, index) => {
          const { img, icon, head, text } = content;
          return (
            <Box key={index}>
              <Box sx={sectionContainer}>
                <Box sx={sectionTextContent}>
                  <Box sx={headerContent}>
                    <Image src={icon} alt="no." />
                    <Typography sx={headerContentText}>{head}</Typography>
                  </Box>
                  <p>{text}</p>
                  <Link href="../../RequestAccess">
                    <a style={sectionTextContentLink}>
                      <Box sx={{display: "flex", alignItems:"center", color:"green"}}>
                        <Typography sx={contentText}>Request Access</Typography>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </Box>
                    </a>
                  </Link>
                </Box>
                <Box sx={parentImage}>
                  <Image src={img} alt="image" />
                  <Box
                    className={`${styles.pImage} ${styles.hide} ${styles.smHide}`}
                  >
                    <Image src={mobile} alt="image" />
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Section4;
