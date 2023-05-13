// library imports
import React, { FC, Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

// feature imports
import ErrorModal from "../features/ErrorModal";
import SettingsForm from "../features/SettingsForm";

// component imports
import ActionButton from "../components/ActionButton";
import Modal from "../components/Modal";

// style imports
import styles from "./RootLayout.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { Arrow, Gear, House } from "../assets/graphics";

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
      <header className={styles.header}>
        <Link to="/">
          <ActionButton icon={House} onClick={() => {}} />
        </Link>
        <div>
          <ActionButton icon={Arrow} onClick={sendRequestHandler} />
          <ActionButton icon={Gear} onClick={settingsHandler} />
        </div>
      </header>
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
