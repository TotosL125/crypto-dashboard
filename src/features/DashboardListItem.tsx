import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./styles/DashboardListItem.module.css";

const DashboardListItem: FC<{ id: string; name: string }> = (props) => {
  return (
    <Link to={`/${props.id}/detail`}>
      <li className={styles.item}>{props.name}</li>
    </Link>
  );
};

export default DashboardListItem;
