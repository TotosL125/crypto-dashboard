// library imports
import React, { FC, useCallback, useContext, useEffect } from "react";

// feature imports
import DashboardList from "../features/DashboardList";

// component imports
import Title from "../components/Title";
import ActionButton from "../components/ActionButton";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const Dashboard: FC = () => {
  const cryptosCtx = useContext(CryptosContext);

  const sendRequest = useCallback(() => {
    cryptosCtx.sendRequestHandler(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
    );
  }, [cryptosCtx]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const openSettings = () => {
    console.log("Add settings");
  };

  return (
    <div>
      <header>
        <ActionButton title="Refresh" onClick={sendRequest} />
        <ActionButton title="Settings" onClick={openSettings} />
      </header>
      <Title title="Dashboard" />
      <DashboardList currencies={cryptosCtx.cryptos} />
    </div>
  );
};

export default Dashboard;
