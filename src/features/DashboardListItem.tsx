// library imports
import React, { FC } from "react";
import { Link } from "react-router-dom";

// component imports
import Text from "../components/Text";
import TextNumber from "../components/TextNumber";

type data = {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  priceChange: number;
  marketCap: number;
  marketCapChange: number;
};

const DashboardListItem: FC<data> = (props) => {
  return (
    <Link to={`/${props.id}/detail`}>
      <li>
        <Text text={props.symbol} />
        <Text text={props.name} />
        <Text text={`${props.currentPrice} ZAR`} />
        <TextNumber num={props.priceChange} />
        <Text text={`${props.marketCap} ZAR`} />
        <TextNumber num={props.marketCapChange} />
      </li>
    </Link>
  );
};

export default DashboardListItem;
