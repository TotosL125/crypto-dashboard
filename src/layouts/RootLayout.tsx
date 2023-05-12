// library imports
import React, { FC, Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

// feature imports
import ErrorModal from "../features/ErrorModal";

// component imports
import ActionButton from "../components/ActionButton";
import Modal from "../components/Modal";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const RootLayout: FC = (props) => {
  const { error, resetError, sendRequestHandler } = useContext(CryptosContext);

  return (
    <Fragment>
      {error && <Modal content={<ErrorModal />} onClick={resetError} />}
      <header>
        <ActionButton text="refresh" onClick={sendRequestHandler} />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
