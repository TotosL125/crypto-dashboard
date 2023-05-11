import React, { FC } from "react";

import DashboardListItem from "./DashboardListItem";

import styles from "./styles/DashboardList.module.css";

import dataObj from "../assets/dataType";

const DashboardList: FC<{ currencies: dataObj[] }> = (props) => {
  return (
    <div className={styles.container}>
      <DashboardListItem id="id" name="Name" />
      <ul>
        {props.currencies.map((currency) => (
          <DashboardListItem
            key={currency.id}
            id={currency.id}
            name={currency.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default DashboardList;
