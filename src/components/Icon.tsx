// library imports
import React, { FC, SVGProps } from "react";

// style imports
import styles from "./styles/Icon.module.css";

const Icon: FC<{ icon: FC<SVGProps<SVGSVGElement>>; style: string }> = (
  props
) => {
  let styleClass;

  if (props.style === "normal") {
    styleClass = styles["icon-normal"];
  } else if (props.style === "good") {
    styleClass = styles["icon-good"];
  } else if (props.style === "bad") {
    styleClass = styles["icon-bad"];
  } else {
    styleClass = styles["icon-normal"];
  }

  return <props.icon className={styleClass} transform="scale(0.8)" />;
};

export default Icon;
