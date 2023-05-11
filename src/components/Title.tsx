import React, { FC } from "react";

import styles from "./styles/Title.module.css";

const Title: FC<{ title: string }> = (props) => {
  return <h1 className={styles.heading}>{props.title}</h1>;
};

export default Title;
