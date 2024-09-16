import React from "react";
import styles from "../styles/Footer.module.css";

export const Footer = ({ contentCount }) => {
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <p>
          I consumed about <b>{contentCount}+</b> contents and counting...
        </p>
        <p>
          and this data last updated on <b>12 SEP 2024</b>
        </p>
      </div>
    </React.Fragment>
  );
};
