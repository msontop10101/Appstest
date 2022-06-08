import React from "react";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <div className={styles.layoutSection}>{children}</div>
    </>
  );
}

export default Layout;
