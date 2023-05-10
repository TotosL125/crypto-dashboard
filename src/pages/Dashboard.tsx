import React, { FC, useState } from "react";
import useRequest from "../hooks/use-request";

import Header from "../components/Header";
import RouteButton from "../components/RouteButton";
import ActionButton from "../components/ActionButton";

export type dataObj = {
  id: string;
  symbol: string;
  name: string;
}[];

const Dashboard: FC = () => {
  const [currencies, setCurrencies] = useState<dataObj>([]);

  const sendRequest = useRequest();

  async function sendRequestHandler() {
    const data = await sendRequest(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    setCurrencies(data);
  }

  return (
    <div>
      <Header title="Dashboard" />
      <RouteButton title="Detail" path="/id/details" />
      <ActionButton title="Refresh" onClick={sendRequestHandler} />
      <ul>
        {currencies.map((currency) => (
          <li key={currency.id}>{currency.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
