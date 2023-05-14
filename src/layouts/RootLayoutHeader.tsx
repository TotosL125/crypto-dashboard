// library imports
import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";

// component imports
import ActionButton from "../components/ActionButton";

// style imports
import styles from "./styles/RootLayoutHeader.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { Gear, House, Reload } from "../assets/graphics";

const RootLayoutHeader: FC = (props) => {
  const { sendRequestHandler, settingsHandler } = useContext(CryptosContext);

  return (
    <header className={styles.header}>
      <Link to="/">
        <ActionButton icon={House} onClick={() => {}} />
      </Link>
      <div>
        <ActionButton icon={Reload} onClick={sendRequestHandler} />
        <ActionButton icon={Gear} onClick={settingsHandler} />
      </div>
    </header>
  );
};

export default RootLayoutHeader;
