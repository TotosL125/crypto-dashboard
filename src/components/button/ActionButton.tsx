// library imports
import React, { ButtonHTMLAttributes, FC } from "react";

// style imports
import styles from "./styles/ActionButton.module.css";

// define type of props accepted
type actbProps = ButtonHTMLAttributes<HTMLButtonElement>;

// component function
const ActionButton: FC<actbProps> = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
