// library imports
import React, { FC, SVGProps } from "react";

// component imports
import Icon from "../components/other/Icon";

// style imports
import styles from "./styles/HeaderButton.module.css";

// define type of props accepted
type hbProps = {
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

// component function
const HeaderButton: FC<hbProps> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <Icon icon={props.icon} styleType="normal" />
    </button>
  );
};

export default HeaderButton;
