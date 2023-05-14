// library imports
import React, { FC } from "react";
import { Link } from "react-router-dom";

// component imports
import Text from "../components/Text";
import TextNumber from "../components/TextNumber";

type data = {
  symbol: string;
  name: string;
  currentPrice: number;
  priceChange: number;
  marketCap: number;
  marketCapChange: number;
};

const DashboardListItem: FC<data> = (props) => {
  return (
    <Link to={`/${props.symbol}/detail`}>
      <li>
        <Text>{props.symbol}</Text>
        <Text>{props.name}</Text>
        <Text>{`${props.currentPrice} ZAR`}</Text>
        <TextNumber num={props.priceChange} />
        <Text>{`${props.marketCap} ZAR`}</Text>
        <TextNumber num={props.marketCapChange} />
      </li>
    </Link>
  );
};

export default DashboardListItem;
