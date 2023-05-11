import React, { FC } from "react";

import styles from "./styles/ActionButton.module.css";

const ActionButton: FC<{
  title: string;
  onClick: () => void;
}> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default ActionButton;
