import React, { useEffect } from "react";
import { Grid, Avatar, Typography, ToggleButtonGroup } from "@mui/material";
import Image from "next/image";
import { dSelectAndLink } from "../../files/data";
import { styled } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";

const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "green !important",
  },
  "&.MuiToggleButton-root:hover": {
    backgroundColor: "green",
  },
  "&.MuiToggleButtonGroup-grouped": {
    width: "100px",
    height: "100px",
    border: "#EEEEEE",
    backgroundColor: "#EEEEEE",
    borderRadius: "5px !important",
  },
  "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
    marginRight: {
      xs: "0px",
      sm: "40px",
    },
  },
});

const ChooseOs = () => {
  const [alignment, setAlignment] = React.useState("");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const tBGridStyle = {
    display: {
      xs: "grid",
      sm: "inline-flex",
    },
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
    justifyItems: "center",
  };

  const avatarStyle = {
    bgcolor: "#EEEEEE",
    borderRadius: "5px",
    width: "100px",
    height: "100px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const modalImageLabelStyle = {
    fontSize: "14px",
    marginTop: "10px",
  };
  const iGridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div>
      {/* <Grid container spacing={2} id="selectOs">
        {dSelectAndLink.map((contents, index) => {
          const { name, img, link } = contents;
          return (
            <React.Fragment key={index}>
              <Grid item xs={6} sm={3} sx={iGridStyle}>
                <Avatar variant="square" sx={avatarStyle}>
                  <Image src={img} alt={name} />
                </Avatar>
                <Typography sx={modalImageLabelStyle}>{name}</Typography>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid> */}
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        sx={tBGridStyle}
      >
        {/* <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton> */}
        {dSelectAndLink.map((contents, index) => {
          const { name, img, link } = contents;
          return (
            <ToggleButton value={name} key={index}>
              <Image src={img} alt={name} />
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
};

export default ChooseOs;
