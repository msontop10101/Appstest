import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import whiteHeader from "../../Assets/Images/Header/whiteHeader.png"; 
import { Box } from "@mui/material";

const MobileFormHeader = () => {
  const sectionContainer = {
    position: "relative",
    paddingBottom: "10px",
}
const backIconBtn = {
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "absolute",
    top: "25%",
    left: "1%",
}
const headerImage = {
    display: "flex",
    justifyContent: "center",
}
  return (
    <>
      <Box sx={sectionContainer}>
        <Box sx={backIconBtn}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </a>
          </Link>
        </Box>
        <Box sx={headerImage}>
          <Image src={whiteHeader} alt="image" />
        </Box>
      </Box>
    </>
  );
}

export default MobileFormHeader;
