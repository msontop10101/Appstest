import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import { dSelectAndLink } from "../../files/data";
import Styles from "./ChooseOs.module.css";

const ChooseOs = (props: any) => {
  const [selected, setSelected] = useState<string>("");
  const [indi, setIndi] = useState<number>(0);

  const handleSelect = (index: number, name: string) => {
    setIndi(index);
    setSelected(name);
    props.onSelect(name);
  };

  useEffect(() => {
    const osAll = document.querySelectorAll<HTMLElement>("#os");
    osAll[indi].style.backgroundColor = "green";
    for (let i = indi + 1; i < 4; i++) {
      osAll[i].style.backgroundColor = "#EEEEEE";
    }
    for (let j = indi - 1; j >= 0; j--) {
      osAll[j].style.backgroundColor = "#EEEEEE";
    }
  }, [indi]);

  const labelFont = {
    fontSize: "14px",
    marginTop: "10px",
  };
  const gridStyle = {
    display: {
      xs: "flex",
      sm: "block",
    },
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  };
  const headerText = {
    fontWeight: "bold",
  };
  const subHeaderText = {
    fontSize: "14px",
  };

  return (
    <>
      <div className={Styles.pageText}>
        <Typography sx={headerText}>
          Select platform and test application
        </Typography>
        <Typography sx={subHeaderText} color="text.secondary">
          Please choose the device platform you&apos;ll be testing on
        </Typography>
      </div>
      <Grid container spacing={2}>
        {dSelectAndLink.map((contents, index) => {
          const { name, img, link } = contents;
          return (
            <Grid item xs={6} sm={3} key={index} sx={gridStyle}>
              <div
                id="os"
                onClick={() => {
                  handleSelect(index, name);
                }}
                className={Styles.os}
              >
                <Image src={img} alt={name} />
              </div>
              <Typography sx={labelFont}>{name}</Typography>
            </Grid>
          );
        })}
      </Grid>
      {/* <div className={Styles.mNavBtns} id="mNavBtns">
        <div>
          <GrayBtn>Back</GrayBtn>
        </div>
        <div>
          <GreenBtn>Next</GreenBtn>
        </div>
      </div> */}
    </>
  );
};

export default ChooseOs;
