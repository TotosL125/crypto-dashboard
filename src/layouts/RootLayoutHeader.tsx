// library imports
import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";

// component imports
import HeaderButton from "./HeaderButton";

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
        <HeaderButton icon={House} onClick={() => {}} />
      </Link>
      <div>
        <HeaderButton icon={Reload} onClick={sendRequestHandler} />
        <HeaderButton icon={Gear} onClick={settingsHandler} />
      </div>
    </header>
  );
};

export default RootLayoutHeader;
