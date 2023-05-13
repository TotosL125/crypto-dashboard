// library imports
import React, { FC, Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

// feature imports
import ErrorModal from "../features/ErrorModal";
import SettingsForm from "../features/SettingsForm";

// component imports
import ActionButton from "../components/ActionButton";
import Modal from "../components/Modal";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { arrow, gear } from "../assets/graphics";

const RootLayout: FC = (props) => {
  const {
    error,
    resetError,
    showSettings,
    settingsHandler,
    sendRequestHandler,
  } = useContext(CryptosContext);

  return (
    <Fragment>
      {error && <Modal content={<ErrorModal />} onClick={resetError} />}
      {showSettings && (
        <Modal content={<SettingsForm />} onClick={settingsHandler} />
      )}
      <header>
        <ActionButton func={arrow} onClick={sendRequestHandler} />
        <ActionButton func={gear} onClick={settingsHandler} />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
