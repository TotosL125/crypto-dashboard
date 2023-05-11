import React, { FC } from "react";
import { Link } from "react-router-dom";

import dataObj from "../assets/dataType";
import Text from "../components/Text";

import styles from "./styles/DashboardListItem.module.css";

const DashboardListItem: FC<dataObj> = (props) => {
  let priceChangeClass: string;

  if (props.price_change_percentage_24h > 0) {
    priceChangeClass = `${styles.price_change_inc}`;
  } else {
    priceChangeClass = `${styles.price_change_dec}`;
  }

  return (
    <Link to={`/${props.id}/detail`}>
      <li className={styles.item}>
        <Text text={props.symbol} />
        <Text text={props.name} />
        <Text text={`${props.current_price} ZAR`} />
        <p className={priceChangeClass}>{props.price_change_percentage_24h}%</p>
      </li>
    </Link>
  );
};

export default DashboardListItem;
