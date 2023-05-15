// library imports
import React, { FC, useContext } from "react";

// feature imports
import DetailMenuItem from "./DetailMenuItem";

// component imports
import Loading from "../../components/other/Loading";

// style imports
import styles from "./styles/DetailMenu.module.css";

// other imports
import { CryptosContext } from "../../stores/crypto-context";
import dataObj from "../../assets/dataType";

type menu = {
  data: dataObj;
};

const DetailMenu: FC<menu> = (props) => {
  const { isLoading } = useContext(CryptosContext);

  let menuItems = [];

  for (const [key, value] of Object.entries(props.data)) {
    if (
      key === "id" ||
      key === "symbol" ||
      key === "name" ||
      key === "image" ||
      key === "roi"
    ) {
      continue;
    }

    if (
      key.includes("rank") ||
      key.includes("valuation") ||
      key.includes("volume") ||
      key.includes("ath") ||
      key.includes("atl")
    ) {
      continue;
    }

    if (value === null) {
      continue;
    }

    if (key.includes("updated")) {
      menuItems.push({ name: key, value: value, type: "text" });
      continue;
    }

    if (key.includes("percentage")) {
      menuItems.push({ name: key, value: value, type: "percentage" });
      continue;
    }

    menuItems.push({ name: key, value: value, type: "currency" });
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <DetailMenuItem
              name={item.name}
              value={item.value}
              type={item.type}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetailMenu;
