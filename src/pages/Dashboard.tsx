// library imports
import React, { FC, Fragment, useContext } from "react";

// feature imports
import DashboardList from "../features/DashboardList";

// component imports
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const Dashboard: FC = () => {
  const cryptosCtx = useContext(CryptosContext);

  const sendRequest = () => {
    cryptosCtx.sendRequestHandler(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
    );
  };

  return (
    <Fragment>
      <Title title="Dashboard" />
      <DashboardList currencies={cryptosCtx.cryptos} />
    </Fragment>
  );
};

export default Dashboard;
