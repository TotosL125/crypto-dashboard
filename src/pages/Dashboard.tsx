// library imports
import React, { FC, Fragment, useContext } from "react";

// feature imports
import DashboardList from "../features/DashboardList";

// component imports
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const Dashboard: FC = () => {
  const { cryptos } = useContext(CryptosContext);

  return (
    <Fragment>
      <Title>Dashboard</Title>
      <DashboardList currencies={cryptos} />
    </Fragment>
  );
};

export default Dashboard;
