import React, { FC } from "react";

import Title from "../components/Title";
import RouteButton from "../components/RouteButton";

const Detail: FC = () => {
  return (
    <div>
      <RouteButton title="Dash" path="/" />
      <Title title="Details" />
    </div>
  );
};

export default Detail;
