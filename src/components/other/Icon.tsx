// library imports
import React, { FC, SVGProps } from "react";

// style imports
import styles from "./styles/Icon.module.css";

// define type of props accepted
type iconProps = { icon: FC<SVGProps<SVGSVGElement>>; styleType: string };

// component function
const Icon: FC<iconProps> = (props) => {
  let styleClass; // style of icon

  // select style class based on styleType prop
  if (props.styleType === "normal") {
    styleClass = styles["icon-normal"]; // light colour
  } else if (props.styleType === "good") {
    styleClass = styles["icon-good"]; // green colour
  } else if (props.styleType === "bad") {
    styleClass = styles["icon-bad"]; // red colour
  } else {
    styleClass = styles["icon-normal"]; // in case other strings passed
  }

  return <props.icon className={styleClass} height="4vh" />;
};

export default Icon;
