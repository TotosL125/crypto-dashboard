// library imports
import React, { FC, useContext } from "react";

// feature imports
import DashboardList from "../features/DashboardList";

// component imports
import Title from "../components/Title";
import ActionButton from "../components/ActionButton";

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
    <div>
      <header>
        <Title title="Dashboard" />
        <ActionButton title="Refresh" onClick={sendRequest} />
      </header>
      <DashboardList currencies={cryptosCtx.cryptos} />
    </div>
  );
};

export default Dashboard;
