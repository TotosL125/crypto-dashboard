// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/TextNumber.module.css";

const TextNumber: FC<{ num: number }> = (props) => {
  let style;
  if (props.num > 0) {
    style = styles.good;
  } else {
    style = styles.bad;
  }
  return (
    <div>
      <p className={style}>{props.num}%</p>
    </div>
  );
};

export default TextNumber;
