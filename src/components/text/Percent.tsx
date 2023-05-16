// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/Percent.module.css";

// component function
const Percent: FC<{ num: number }> = (props) => {
  let style; // store style class

  if (props.num > 0) {
    style = styles.good; // green colour
  } else {
    style = styles.bad; // red colour
  }
  return (
    <div>
      <p className={style}>{props.num.toFixed(4)}%</p>
    </div>
  );
};

export default Percent;
