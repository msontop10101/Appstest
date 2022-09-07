import React from "react";
import Button from "@mui/material/Button";

type Props = {
  children: JSX.Element;
  color: any;
  size: any;
  variant: any;
  fullWidth: boolean;
  sx: any;
  type: string;
};

const CustomButton: React.FC<Props> = ({
  children,
  color,
  size,
  variant,
  fullWidth,
  sx,
  type,
}) => {
  return (
    <>
      <Button
        color={color}
        size={size}
        variant={variant}
        sx={sx}
        type="submit"
        fullWidth
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
