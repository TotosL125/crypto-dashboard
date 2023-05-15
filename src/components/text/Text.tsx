// library imports
import React, { FC, ReactNode } from "react";

// style imports
import styles from "./styles/Text.module.css";

const Text: FC<{ children: ReactNode }> = (props) => {
  return (
    <div>
      <p className={styles.text}>{props.children}</p>
    </div>
  );
};

export default Text;
