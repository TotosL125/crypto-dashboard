// library imports
import { FC, useContext } from "react";
import { Link, useParams } from "react-router-dom";

// component imports
import HeaderButton from "./HeaderButton";

// style imports
import styles from "./styles/RootLayoutHeader.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import useSettings from "../hooks/use-settings";

// asset imports
import { Back, Gear, Reload } from "../assets/graphics";

// component function
const RootLayoutHeader: FC = (props) => {
  // declare functions imported from context
  const { sendRequestHandler } = useContext(CryptosContext);

  const params = useParams(); // access parameters in url

  // settings handler function
  const settingsHandler = useSettings();

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
