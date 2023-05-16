// library imports
import React, { ButtonHTMLAttributes, FC } from "react";

// style imports
import styles from "./styles/AltButton.module.css";

// define type of props accepted
type altbProps = ButtonHTMLAttributes<HTMLButtonElement>;

// component function
const AltButton: FC<altbProps> = (props) => {
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

export default AltButton;
