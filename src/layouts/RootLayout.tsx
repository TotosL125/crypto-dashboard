// library imports
import React, { FC, useContext } from "react";
import { Outlet } from "react-router-dom";

// feature imports
import ErrorModal from "../features/modal/ErrorModal";
import SettingsForm from "../features/modal/SettingsForm";

// component imports
import RootLayoutHeader from "./RootLayoutHeader";
import RootLayoutFooter from "./RootLayoutFooter";
import Modal from "../components/other/Modal";

// style imports
import styles from "./styles/RootLayout.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";

// component function
const RootLayout: FC = (props) => {
  // declare states and functions imported from context
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
      <RootLayoutFooter />
    </div>
  );
};

export default RootLayout;
