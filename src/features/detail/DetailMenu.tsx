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

// define type of props accepted
type menu = {
  data: dataObj;
};

// component function
const DetailMenu: FC<menu> = (props) => {
  // declare state imported from context
  const { isLoading } = useContext(CryptosContext);

  // declare array to store items
  let menuItems = [];

  // convert prop object to array and loop
  for (const [key, value] of Object.entries(props.data)) {
    // remove items in this condition
    if (
      key === "id" ||
      key === "symbol" ||
      key === "name" ||
      key === "image" ||
      key === "roi" ||
      key.includes("rank") ||
      key.includes("valuation") ||
      key.includes("volume") ||
      key.includes("ath") ||
      key.includes("atl") ||
      value === null
    ) {
      continue;
    }

    // items of type text
    if (key.includes("updated")) {
      menuItems.push({ name: key, value: value, type: "text" });
      continue;
    }

    // items of type percentage
    if (key.includes("percentage")) {
      menuItems.push({ name: key, value: value, type: "percentage" });
      continue;
    }

    // items of type currency
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
              key={item.name}
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
