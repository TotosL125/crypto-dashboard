// library imports
import React, { FC, useContext } from "react";

// feature imports
import DashboardListHeader from "./DashboardListHeader";
import DashboardListItem from "./DashboardListItem";

// component imports
import Loading from "../../components/other/Loading";

// style imports
import styles from "./styles/DashboardList.module.css";

// other imports
import { CryptosContext } from "../../stores/crypto-context";
import dataObj from "../../assets/dataType";

// component function
const DashboardList: FC<{ currencies: dataObj[] }> = (props) => {
  // declare state imported from context
  const { isLoading } = useContext(CryptosContext);

  return (
    <div className={styles.container}>
      <DashboardListHeader />
      {isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.list}>
          {props.currencies.map((currency) => (
            <DashboardListItem
              key={currency.id}
              symbol={currency.symbol}
              name={currency.name}
              image={currency.image}
              currentPrice={currency.current_price}
              priceChange={currency.price_change_percentage_24h}
              marketCapChange={currency.market_cap_change_percentage_24h}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DashboardList;
