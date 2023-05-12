// library imports
import React, { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";

// component imports
import ActionButton from "../components/ActionButton";

const RootLayout: FC = (props) => {
  return (
    <Fragment>
      <header>
        <ActionButton title="refresh" onClick={() => {}} />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
