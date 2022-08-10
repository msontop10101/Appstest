import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type Props = {
  children: JSX.Element;
};

const CustomOutlinedBtn: React.FC<Props> = ({ children }) => {
  const btnStyles = {
    padding: 1,
    marginTop: "16px",
    marginRight: {
      sm: "20px",
    },
    width: {
      sm: "200px",
    },
  };
  return (
    <Button sx={btnStyles} size="small" variant="outlined">
      {children}
    </Button>
  );
};

export default CustomOutlinedBtn;
