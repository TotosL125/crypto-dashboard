// library imports
import React, { FC, Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

// feature imports
import ErrorModal from "../features/ErrorModal";
import SettingsForm from "../features/SettingsForm";

// component imports
import RootLayoutHeader from "./RootLayoutHeader";
import Modal from "../components/Modal";

// style imports
import styles from "./RootLayout.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const RootLayout: FC = (props) => {
  const { error, resetError, showSettings, settingsHandler } =
    useContext(CryptosContext);

  return (
    <Fragment>
      {error && <Modal content={<ErrorModal />} onClick={resetError} />}
      {showSettings && (
        <Modal content={<SettingsForm />} onClick={settingsHandler} />
      )}
      <RootLayoutHeader />
      <Outlet />
      <footer>
        <p>
          Powered by{" "}
          {
            <a
              target="_bank"
              rel="noreferrer"
              href="https://www.coingecko.com/en/api"
            >
              CoinGecko API
            </a>
          }
        </p>
      </footer>
    </Fragment>
  );
};

export default RootLayout;
