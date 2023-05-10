import React, { FC } from "react";

import Header from "../components/Header";
import RouteButton from "../components/RouteButton";

const Detail: FC = () => {
  return (
    <div>
      <RouteButton title="Dash" path="/" />
      <Header title="Details" />
    </div>
  );
};

export default Detail;
