import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type Props = {
  children: JSX.Element;
};

const Cards: React.FC<Props> = ({ children }) => {
    const cardStyle = {
        position: "relative",
        height:"270px",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        border:"1px solid #80808014"
    }
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={cardStyle}>
        <React.Fragment>
          <CardContent>{children}</CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default Cards;
