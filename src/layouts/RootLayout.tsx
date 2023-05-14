// library imports
import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";

// feature imports
import ErrorModal from "../features/ErrorModal";
import SettingsForm from "../features/SettingsForm";

// component imports
import RootLayoutHeader from "./RootLayoutHeader";
import Modal from "../components/Modal";

// style imports
import styles from "./styles/RootLayout.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const RootLayout: FC = (props) => {
  const { error, resetError, showSettings, settingsHandler } =
    useContext(CryptosContext);

  return (
    <div className={styles.layout}>
      {error && <Modal content={<ErrorModal />} onClick={resetError} />}
      {showSettings && (
        <Modal content={<SettingsForm />} onClick={settingsHandler} />
      )}
      <RootLayoutHeader />
      <div className={styles.content}>
        <Outlet />
      </div>
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
    </div>
  );
};

export default RootLayout;
