import React, { useRef } from "react";

import styles from "../styles/Input.module.css";

export const Input = ({ getInput }) => {
  const inputRef = useRef();

  return (
    <React.Fragment>
      <input
        ref={inputRef}
        type="text"
        placeholder="enterHere"
        autoFocus={true}
        className={styles.search}
        onChange={() => getInput(inputRef.current.value)}
      />
    </React.Fragment>
  );
};
