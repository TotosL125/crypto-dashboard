// library imports
import React, { FC, ReactNode } from "react";

// style imports
import styles from "./styles/Title.module.css";

const Title: FC<{ children?: ReactNode }> = (props) => {
  return <h2 className={styles.title}>{props.children}</h2>;
};

export default Title;
