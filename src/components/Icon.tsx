// library imports
import React, { FC, SVGProps } from "react";

// style imports
import styles from "./styles/Icon.module.css";

const Icon: FC<{ icon: FC<SVGProps<SVGSVGElement>> }> = (props) => {
  return <props.icon className={styles.icon} transform="scale(0.2)" />;
};

export default Icon;
