import React, { FC } from "react";
import { Link } from "react-router-dom";

import dataObj from "../assets/dataType";

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
        <p className={styles.text}>{props.symbol}</p>
        <p className={styles.text}>{props.name}</p>
        <p className={styles.text}>{props.current_price}</p>
        <p className={priceChangeClass}>{props.price_change_percentage_24h}</p>
      </li>
    </Link>
  );
};

export default DashboardListItem;
