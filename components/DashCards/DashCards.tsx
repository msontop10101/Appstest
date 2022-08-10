import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Styles from "./DashCards.module.css";
import Link from "next/link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DashCards = (props: any) => {
  const infoCards = {
    width: "100%",
    marginRight: "20px",
  };
  return (
    <div className={Styles.cardsContainer}>
      {" "}
      {props.steps.map((infos: any, index: number) => {
        return (
          <div key={index} className={Styles.cardsContainer}>
            <Card sx={infoCards}>
              <CardContent>
                <Typography>{infos.no}</Typography>
                <Typography>{infos.head}</Typography>
                <Typography variant="body2">{infos.body}</Typography>
              </CardContent>
              <CardActions>
                <Link href="#">
                  <a>
                    <Typography>{infos.button}</Typography>
                  </a>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default DashCards;
