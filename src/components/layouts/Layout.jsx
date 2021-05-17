import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
