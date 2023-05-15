// library imports
import React, { FC, useContext } from "react";

// feature imports
import DetailMenuItem from "./DetailMenuItem";

// component imports
import Loading from "../components/Loading";

// style imports
import styles from "./styles/DetailMenu.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import dataObj from "../assets/dataType";

type menu = {
  data: dataObj;
};

const DetailMenu: FC<menu> = (props) => {
  const { isLoading } = useContext(CryptosContext);
  const menuItems = Object.entries(props.data);

  return (
    <div className={styles.container}>
      {isLoading && <Loading />}
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <DetailMenuItem name={item[0]} value={item[1]} />
        ))}
      </ul>
    </div>
  );
};

export default DetailMenu;
