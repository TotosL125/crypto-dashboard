import React, { FC } from "react";

import Header from "../components/Header";
import RouteButton from "../components/RouteButton";

const Dashboard: FC = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <RouteButton title="Detail" path="/id/details" />
    </div>
  );
};

export default Dashboard;
