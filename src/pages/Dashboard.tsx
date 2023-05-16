// library imports
import React, { FC, Fragment, useContext, useEffect } from "react";

// feature imports
import DashboardList from "../features/dashboard/DashboardList";

// component imports
import Title from "../components/text/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";

// component function
const Dashboard: FC = () => {
  // declare state imported from context
  const { cryptos, sendRequestHandler } = useContext(CryptosContext);

  useEffect(() => {
    sendRequestHandler();
  }, [sendRequestHandler]);

  return (
    <Fragment>
      <Title>Dashboard</Title>
      <DashboardList currencies={cryptos} />
    </Fragment>
  );
};

export default Dashboard;
