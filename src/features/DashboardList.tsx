// library imports
import React, { FC } from "react";

// feature imports
import DashboardListHeader from "./DashboardListHeader";
import DashboardListItem from "./DashboardListItem";

// other imports
import dataObj from "../assets/dataType";

const DashboardList: FC<{ currencies: dataObj[] }> = (props) => {
  return (
    <div>
      <DashboardListHeader />
      <ul>
        {props.currencies.map((currency) => (
          <DashboardListItem
            key={currency.id}
            symbol={currency.symbol}
            name={currency.name}
            currentPrice={currency.current_price}
            priceChange={currency.price_change_percentage_24h}
            marketCap={currency.market_cap}
            marketCapChange={currency.market_cap_change_percentage_24h}
          />
        ))}
      </ul>
    </div>
  );
};

export default DashboardList;
