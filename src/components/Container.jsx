import React from "react";

import styles from "../styles/Container.module.css"

export const Container = ({ children }) => {
  return (
    <React.Fragment>
      <form className={styles.searchForm}>{children}</form>
    </React.Fragment>
  );
};
