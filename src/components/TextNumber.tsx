import React, { FC } from "react";

import styles from "./styles/TextNumber.module.css";

const TextNumber: FC<{ text: string; num: number }> = (props) => {
  let numStyle: string;

  if (props.num > 0) {
    numStyle = `${styles.inc}`;
  } else {
    numStyle = `${styles.dec}`;
  }
  return (
    <div className={styles.container}>
      <p className={numStyle}>{props.text}</p>
    </div>
  );
};

export default TextNumber;
