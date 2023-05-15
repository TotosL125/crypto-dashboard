// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/Percent.module.css";

const Percent: FC<{ num: number }> = (props) => {
  let style;
  if (props.num > 0) {
    style = styles.good;
  } else {
    style = styles.bad;
  }
  return (
    <div>
      <p className={style}>{props.num.toFixed(4)}%</p>
    </div>
  );
};

export default Percent;
