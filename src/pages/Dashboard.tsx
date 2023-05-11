import React, { FC, useContext } from "react";

import DashboardList from "../features/DashboardList";

import Header from "../components/Header";
import RouteButton from "../components/RouteButton";
import ActionButton from "../components/ActionButton";

import { CryptosContext } from "../stores/crypto-context";

import styles from "./styles/Dashboard.module.css";

const Dashboard: FC = () => {
  const cryptosCtx = useContext(CryptosContext);

  const sendRequest = () => {
    cryptosCtx.sendRequestHandler(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
    );
  };

  return (
    <div>
      <Header title="Dashboard" />
      <RouteButton title="Detail" path="/id/details" />
      <ActionButton title="Refresh" onClick={sendRequest} />
      <DashboardList currencies={cryptosCtx.cryptos} />
    </div>
  );
};

export default Dashboard;
