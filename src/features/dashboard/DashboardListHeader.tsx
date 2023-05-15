// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/DashboardListHeader.module.css";

const DashboardListHeader: FC = () => {
  return (
    <div className={styles.header}>
      <h4>Name</h4>
      <h4>Current Price</h4>
      <h4>Price Change</h4>
      <h4>Market Cap</h4>
      <h4>Market Cap Change</h4>
    </div>
  );
};

export default DashboardListHeader;
