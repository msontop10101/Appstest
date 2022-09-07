import React, { useState, useEffect } from "react";
import { Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import { dSelectAndLink } from "../../../../files/data";

const ChooseOs = (props: any) => {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (index: number, name: string) => {
    setSelected(name);
    props.onSelect(name);
  };

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
  const os = {
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: "#EEEEEE",
  }
  const pageText = {
    margin: "25px 0px 25px 0px",
}
const mNavBtns = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0px 10px 0px",
}

  return (
    <>
      <Box sx={pageText}>
        <Typography sx={headerText}>
          Select platform and test application
        </Typography>
        <Typography sx={subHeaderText} color="text.secondary">
          Please choose the device platform you&apos;ll be testing on
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {dSelectAndLink.map((contents, index) => {
          const { name, img, link } = contents;
          return (
            <Grid item xs={6} sm={3} key={index} sx={gridStyle}>
              <Box
                id="os"
                onClick={() => {
                  handleSelect(index, name);
                }}
                sx={os}
                style = {{backgroundColor: selected == name ? "green": ""}}
              >
                <Image src={img} alt={name} />
              </Box>
              <Typography sx={labelFont}>{name}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ChooseOs;
