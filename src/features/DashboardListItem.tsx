import React, { FC } from "react";
import { Link } from "react-router-dom";

const DashboardListItem: FC<{ id: string; name: string }> = (props) => {
  return (
    <Link to={`/${props.id}/detail`}>
      <li>{props.name}</li>
    </Link>
  );
};

export default DashboardListItem;
