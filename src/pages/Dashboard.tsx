import React, { FC, useState } from "react";
import useRequest from "../hooks/use-request";

import DashboardList from "../features/DashboardList";

import Header from "../components/Header";
import RouteButton from "../components/RouteButton";
import ActionButton from "../components/ActionButton";

export type dataObj = {
  id: string;
  symbol: string;
  name: string;
};

const Dashboard: FC = () => {
  const [currencies, setCurrencies] = useState<dataObj[]>([]);

  const sendRequest = useRequest();

  async function sendRequestHandler() {
    const data = await sendRequest(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
    );
    setCurrencies(data);
  }

  return (
    <div>
      <Header title="Dashboard" />
      <RouteButton title="Detail" path="/id/details" />
      <ActionButton title="Refresh" onClick={sendRequestHandler} />
      <DashboardList currencies={currencies} />
    </div>
  );
};

export default Dashboard;
