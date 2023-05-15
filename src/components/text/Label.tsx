// library imports
import React, { FC, ReactNode } from "react";

// style imports
import styles from "./styles/Label.module.css";

const Label: FC<{ children?: ReactNode; for?: string }> = (props) => {
  return (
    <label htmlFor={props.for} className={styles.label}>
      {props.children}
    </label>
  );
};

export default Label;
