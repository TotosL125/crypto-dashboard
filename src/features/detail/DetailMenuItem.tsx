// library imports
import React, { FC, ReactNode } from "react";

// component imports
import Text from "../../components/text/Text";
import Currency from "../../components/text/Currency";
import Percent from "../../components/text/Percent";

// style imports
import styles from "./styles/DetailMenuItem.module.css";

const DetailMenuItem: FC<{
  name: string;
  value: string | number;
  type: string;
}> = (props) => {
  let value: ReactNode;

  if (props.type === "text") {
    value = <Text>{props.value}</Text>;
  } else if (props.type === "percentage") {
    value = <Percent num={Number(props.value)} />;
  } else {
    value = <Currency num={Number(props.value)} />;
  }

  return (
    <li className={styles.item}>
      <div className={styles["item-value"]}>{value}</div>
      <Text>{props.name.replace(/_/g, " ")}</Text>
    </li>
  );
};

export default DetailMenuItem;
