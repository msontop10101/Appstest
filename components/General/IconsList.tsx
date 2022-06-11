import React from "react";
import Image from "next/image";
import styles from "./IconsList.module.css";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import { IconsList1 } from "../../files/data";

function IconsList() {
  return (
    <>
      <div>
        <Box className={styles.boxContainer}>
          {IconsList1.map((icons, index) => {
            const { img } = icons;
            return (
              <div key={index} className={styles.items}>
                <Image src={img} alt="image" />
              </div>
            );
          })}
        </Box>
      </div>
    </>
  );
}

export default IconsList;
