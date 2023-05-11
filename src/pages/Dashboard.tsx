import React, { FC, Fragment, useContext } from "react";

import DashboardList from "../features/DashboardList";

import Title from "../components/Title";
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
    <Fragment>
      <header className={styles.header}>
        <Title title="Dashboard" />
        <ActionButton title="Refresh" onClick={sendRequest} />
      </header>
      <DashboardList currencies={cryptosCtx.cryptos} />
    </Fragment>
  );
};

export default Dashboard;
