import React, { FC } from "react";
import { Link } from "react-router-dom";

import dataObj from "../assets/dataType";
import Text from "../components/Text";
import TextNumber from "../components/TextNumber";

const DashboardListItem: FC<dataObj> = (props) => {
  return (
    <Link to={`/${props.id}/detail`}>
      <li>
        <Text text={props.symbol} />
        <Text text={props.name} />
        <Text text={`${props.current_price} ZAR`} />
        <TextNumber
          text={`${props.price_change_percentage_24h}%`}
          num={props.price_change_percentage_24h}
        />
      </li>
    </Link>
  );
};

export default DashboardListItem;
