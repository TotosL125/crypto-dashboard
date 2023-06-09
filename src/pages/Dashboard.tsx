// library imports
import React, { FC, Fragment, useContext } from "react";

// feature imports
import DashboardList from "../features/dashboard/DashboardList";

// component imports
import Title from "../components/text/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";

// component function
const Dashboard: FC = () => {
  // declare state imported from context
  const { cryptos } = useContext(CryptosContext);

  return (
    <Fragment>
      <Title>Dashboard</Title>
      <DashboardList currencies={cryptos} />
    </Fragment>
  );
};

export default Dashboard;
