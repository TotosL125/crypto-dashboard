// library imports
import React, { FC, SVGProps } from "react";

// component imports
import Icon from "../components/Icon";

// style imports
import styles from "./styles/HeaderButton.module.css";

const HeaderButton: FC<{
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <Icon icon={props.icon} styleType="normal" />
    </button>
  );
};

export default HeaderButton;
