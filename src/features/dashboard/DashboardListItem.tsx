// library imports
import React, { FC } from "react";
import { Link } from "react-router-dom";

// component imports
import Text from "../../components/text/Text";
import Number from "../../components/text/Number";
import TextNumber from "../../components/text/TextNumber";

// style imports
import styles from "./styles/DashboardListItem.module.css";

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
    <Link to={`/${props.symbol}/detail`} style={{ textDecoration: "none" }}>
      <li className={styles.container}>
        <Text>{props.symbol}</Text>
        <Text>{props.name}</Text>
        <Number num={props.currentPrice} />
        <TextNumber num={props.priceChange} />
        <Number num={props.marketCap} />
        <TextNumber num={props.marketCapChange} />
      </li>
    </Link>
  );
};

export default DashboardListItem;
