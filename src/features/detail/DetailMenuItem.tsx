// library imports
import React, { FC, ReactNode } from "react";

// component imports
import Text from "../../components/text/Text";
import Currency from "../../components/text/Currency";
import Percent from "../../components/text/Percent";

// style imports
import styles from "./styles/DetailMenuItem.module.css";

// define type of props accepted
type dmiProps = {
  name: string;
  value: string | number;
  type: string;
};

//component function
const DetailMenuItem: FC<dmiProps> = (props) => {
  let value: ReactNode; // output

  // select output type
  if (props.type === "text") {
    value = <Text>{props.value}</Text>; // text output
  } else if (props.type === "percentage") {
    value = <Percent num={Number(props.value)} />; // percent output
  } else {
    value = <Currency num={Number(props.value)} />; // currency output
  }

  return (
    <li className={styles.item}>
      <div className={styles["item-value"]}>{value}</div>
      <Text>{props.name.replace(/_/g, " ")}</Text>
    </li>
  );
};

export default DetailMenuItem;
