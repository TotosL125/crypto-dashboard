// library imports
import React, { FC, Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

// component imports
import ActionButton from "../components/ActionButton";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const RootLayout: FC = (props) => {
  const { sendRequestHandler } = useContext(CryptosContext);

  return (
    <Fragment>
      <header>
        <ActionButton title="refresh" onClick={sendRequestHandler} />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
