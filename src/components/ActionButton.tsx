// library imports
import React, { FC, SVGProps } from "react";

// component imports
import Icon from "./Icon";

// style imports
import styles from "./styles/ActionButton.module.css";

const ActionButton: FC<{
  icon?: FC<SVGProps<SVGSVGElement>>;
  text?: string;
  style: string;
  onClick: () => void;
}> = (props) => {
  if (props.text) {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button className={styles.button} onClick={props.onClick}>
        <Icon icon={props.icon!} style={props.style} />
      </button>
    );
  }
};

export default ActionButton;
