// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/Text.module.css";

const Text: FC<{ text: string }> = (props) => {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Text;
