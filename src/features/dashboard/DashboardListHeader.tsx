// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/DashboardListHeader.module.css";

const DashboardListHeader: FC = () => {
  return (
    <div className={styles.header}>
      <div></div>
      <div>
        <h4>Name</h4>
      </div>
      <div>
        <h4>Current Price</h4>
      </div>
      <div>
        <h4>Price Change</h4>
      </div>
      <div>
        <h4>Market Cap Change</h4>
      </div>
    </div>
  );
};

export default DashboardListHeader;
