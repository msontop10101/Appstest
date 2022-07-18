import React from "react";
import Button from "@mui/material/Button";

type Props = {
  children: JSX.Element;
  color: any;
  size: any;
  variant: any;
  fullWidth: boolean;
  sx: any;
};

const CustomButton: React.FC<Props> = ({
  children,
  color,
  size,
  variant,
  fullWidth,
  sx,
}) => {
  return (
    <>
      <Button color={color} size={size} variant={variant} sx={sx} fullWidth>
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
