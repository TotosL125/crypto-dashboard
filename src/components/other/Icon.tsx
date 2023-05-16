// library imports
import React, { FC, SVGProps } from "react";

// style imports
import styles from "./styles/Icon.module.css";

const Icon: FC<{ icon: FC<SVGProps<SVGSVGElement>>; styleType: string }> = (
  props
) => {
  let styleClass;

  if (props.styleType === "normal") {
    styleClass = styles["icon-normal"];
  } else if (props.styleType === "good") {
    styleClass = styles["icon-good"];
  } else if (props.styleType === "bad") {
    styleClass = styles["icon-bad"];
  } else {
    styleClass = styles["icon-normal"];
  }

  return <props.icon className={styleClass} height="4vh" />;
};

export default Icon;
