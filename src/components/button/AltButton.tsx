// library imports
import React, { FC, SVGProps } from "react";

// component imports
import Icon from "../other/Icon";

// style imports
import styles from "./styles/AltButton.module.css";

// define type of props accepted
type altbProps = {
  icon?: FC<SVGProps<SVGSVGElement>>;
  text?: string;
  styleType: string;
  onClick: () => void;
};

// component function
const AltButton: FC<altbProps> = (props) => {
  // check type of content provided
  if (props.text) {
    // display text
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    );
  } else {
    // display icon
    return (
      <button className={styles.button} onClick={props.onClick}>
        <Icon icon={props.icon!} styleType={props.styleType} />
      </button>
    );
  }
};

export default AltButton;
