import React, { FC } from "react";

import styles from "./styles/Text.module.css";

const Text: FC<{ text: string }> = (props) => {
  return (
    <div className={styles.container}>
      <p>{props.text}</p>
    </div>
  );
};

export default Text;
