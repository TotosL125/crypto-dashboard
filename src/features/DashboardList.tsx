import React, { FC } from "react";

import DashboardListItem from "./DashboardListItem";

import styles from "./styles/DashboardList.module.css";

import dataObj from "../assets/dataType";

const DashboardList: FC<{ currencies: dataObj[] }> = (props) => {
  return (
    <div className={styles.container}>
      <ul>
        {props.currencies.map((currency) => (
          <DashboardListItem
            key={currency.id}
            id={currency.id}
            symbol={currency.symbol}
            name={currency.name}
            current_price={currency.current_price}
            price_change_percentage_24h={currency.price_change_percentage_24h}
          />
        ))}
      </ul>
    </div>
  );
};

export default DashboardList;
