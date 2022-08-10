import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type Props = {
  bgColor: string;
  headtext: string;
  bodytext: string;
  button: string;
};

const SideCards: React.FC<Props> = ({
  bgColor,
  headtext,
  bodytext,
  button,
}) => {
  const cardStyles = {
    width: "100%",
    backgroundColor: bgColor,
  };
  const headStyles = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: "15px 0px 15px 0px",
  };
  const linkStyles = {
    color: "#00690B",
    textDecoration: "underline",
  };
  return (
    <Card sx={cardStyles}>
      <CardContent>
        <Typography sx={headStyles}>{headtext}</Typography>
        <Typography variant="body2">{bodytext}</Typography>
      </CardContent>
      <CardActions>
        <Link href="#">
          <a>
            <Typography sx={linkStyles}>{button}</Typography>
          </a>
        </Link>
      </CardActions>
    </Card>
  );
};

export default SideCards;
