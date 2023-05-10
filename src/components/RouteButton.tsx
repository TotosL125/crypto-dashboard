import React, { FC } from "react";
import { Link } from "react-router-dom";

const RouteButton: FC<{ title: string; path: string }> = (props) => {
  return (
    <Link to={props.path}>
      <button>{props.title}</button>
    </Link>
  );
};

export default RouteButton;
