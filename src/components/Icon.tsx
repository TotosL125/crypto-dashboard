// library imports
import React, { FC, SVGProps } from "react";

// style imports
import styles from "./styles/Icon.module.css";

const Icon: FC<{ icon: FC<SVGProps<SVGSVGElement>> }> = (props) => {
  return <props.icon className={styles.icon} height="4vh" />;
};

export default Icon;
