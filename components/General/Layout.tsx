import { Container } from "@mui/system";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
