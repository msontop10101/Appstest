import React from "react";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import { IconsList1 } from "../../../files/data";

function IconsList() {
  const sectionContainer = {
    display: "flex",
    justifyContent: "center",
    backgroundColor:  "#FCFCFC",
    paddingBottom: "30px",
}
const sectionContainerText = {
    textAlign: "center",
    fontWeight: "bold",
    padding: "10px",
}
const boxContainer = {
    display: "flex",
    flexDirection: "row",
}
const items = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
}
  return ( 
    <>
      <div>
        <Box sx={boxContainer}>
          {IconsList1.map((icons, index) => {
            const { img } = icons;
            return (
              <Box key={index} sx={items}>
                <Image src={img} alt="image" />
              </Box>
            );
          })}
        </Box>
      </div>
    </>
  );
}

export default IconsList;
