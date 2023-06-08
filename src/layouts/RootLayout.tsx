// library imports
import { FC } from "react";
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
import useSettings from "../hooks/use-settings";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { resetError } from "../stores/cryptos/cryptosSlice";

// component function
const RootLayout: FC = (props) => {
  const dispatch = useAppDispatch();

  // redux error state
  const error = useAppSelector((state) => state.cryptos.error);
  const resetErrorHandler = () => {
    dispatch(resetError());
  };

  // redux settings state
  const showSettings = useAppSelector((state) => state.settings.showSettings);
  const settingsHandler = useSettings();

  return (
    <div className={styles.layout}>
      {error && <Modal content={<ErrorModal />} onClick={resetErrorHandler} />}
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
