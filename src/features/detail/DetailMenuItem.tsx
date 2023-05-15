// library imports
import React, { FC } from "react";

// component imports
import Text from "../../components/text/Text";
import Number from "../../components/text/Number";
import Label from "../../components/text/Label";

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
