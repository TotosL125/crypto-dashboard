// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/Title.module.css";

const Title: FC<{ title: string }> = (props) => {
  return <h2 className={styles.title}>{props.title}</h2>;
};

export default Title;
