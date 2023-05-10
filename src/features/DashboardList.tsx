import React, { FC } from "react";

import DashboardListItem from "./DashboardListItem";

import { dataObj } from "../pages/Dashboard";

const DashboardList: FC<{ currencies: dataObj[] }> = (props) => {
  return (
    <ul>
      {props.currencies.map((currency) => (
        <DashboardListItem
          key={currency.id}
          id={currency.id}
          name={currency.name}
        />
      ))}
    </ul>
  );
};

export default DashboardList;
