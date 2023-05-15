// library imports
import React, { FC } from "react";

// component imports
import Text from "../../components/Text";
import Number from "../../components/Number";
import Label from "../../components/Label";

// style imports
import styles from "./styles/DetailMenuItem.module.css";

const DetailMenuItem: FC<{
  name: string;
  value: string | number;
}> = (props) => {
  return (
    <li className={styles.item}>
      <div className={styles["item-value"]}>
        <Text>{props.value}</Text>
      </div>
      <Label>{props.name}</Label>
    </li>
  );
};

export default DetailMenuItem;
