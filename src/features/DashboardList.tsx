// library imports
import React, { FC, useContext } from "react";

// feature imports
import DashboardListHeader from "./DashboardListHeader";
import DashboardListItem from "./DashboardListItem";

// component imports
import Loading from "../components/Loading";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import dataObj from "../assets/dataType";

const DashboardList: FC<{ currencies: dataObj[] }> = (props) => {
  const { isLoading } = useContext(CryptosContext);

  return (
    <div>
      <DashboardListHeader />
      {isLoading && <Loading />}
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
