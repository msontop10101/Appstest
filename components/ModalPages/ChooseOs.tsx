import React, { useState, useEffect } from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import Image from "next/image";
import { dSelectAndLink } from "../../files/data";
import Styles from "./ChooseOs.module.css";

const ChooseOs = () => {
  const [selected, setSelected] = useState(name);
  const [indi, setIndi] = useState(0);

  const handleSelect = (event: any, index: any) => {
    setIndi(index);
  };

  useEffect(() => {
    const os = document.querySelector<HTMLElement>("#os")!;
    const osAll = document.querySelectorAll("#os");
    osAll[indi].style.backgroundColor = "green";
    for (let i = indi + 1; i < 4; i++) {
      osAll[i].style.backgroundColor = "#EEEEEE";
    }
    for (let j = indi - 1; j >= 0; j--) {
      osAll[j].style.backgroundColor = "#EEEEEE";
    }
    // switch (indi) {
    //   case 0:
    //     osAll[1].style.backgroundColor = "#EEEEEE";
    //     osAll[2].style.backgroundColor = "#EEEEEE";
    //     osAll[3].style.backgroundColor = "#EEEEEE";
    //     break;
    //   case 1:
    //     osAll[0].style.backgroundColor = "#EEEEEE";
    //     osAll[2].style.backgroundColor = "#EEEEEE";
    //     osAll[3].style.backgroundColor = "#EEEEEE";
    //     break;
    //   case 2:
    //     osAll[0].style.backgroundColor = "#EEEEEE";
    //     osAll[1].style.backgroundColor = "#EEEEEE";
    //     osAll[3].style.backgroundColor = "#EEEEEE";
    //     break;
    //   case 3:
    //     osAll[0].style.backgroundColor = "#EEEEEE";
    //     osAll[1].style.backgroundColor = "#EEEEEE";
    //     osAll[2].style.backgroundColor = "#EEEEEE";
    //     break;
    // }
  }, [indi]);

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#EEEEEE",
    "&:hover": {
      backgroundColor: "green",
    },
  };

  const labelFont = {
    fontSize: "14px",
    marginTop: "10px",
  };

  return (
    <>
      <Grid container spacing={2} id="osContianer">
        {dSelectAndLink.map((contents, index) => {
          const { name, img, link } = contents;
          return (
            <Grid item xs={6} sm={3} key={index}>
              <Avatar
                variant="square"
                sx={avatarStyle}
                id="os"
                onClick={(event) => handleSelect(event, index)}
              >
                <Image src={img} alt={name} />
              </Avatar>
              <Typography sx={labelFont}>{name}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ChooseOs;
