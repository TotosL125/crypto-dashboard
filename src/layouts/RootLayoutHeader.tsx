// library imports
import React, { FC, useContext } from "react";
import { Link, useParams } from "react-router-dom";

// component imports
import HeaderButton from "./HeaderButton";

// style imports
import styles from "./styles/RootLayoutHeader.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { Back, Gear, Reload } from "../assets/graphics";

const RootLayoutHeader: FC = (props) => {
  const { sendRequestHandler, settingsHandler } = useContext(CryptosContext);
  const params = useParams();

  return (
    <div className={styles.header}>
      <div>
        <HeaderButton icon={Reload} onClick={sendRequestHandler} />
        <HeaderButton icon={Gear} onClick={settingsHandler} />
      </div>
      {params.id && (
        <Link to="/">
          <HeaderButton icon={Back} onClick={() => {}} />
        </Link>
      )}
    </div>
  );
};

export default RootLayoutHeader;
