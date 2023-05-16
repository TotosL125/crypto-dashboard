// library imports
import React, { FC } from "react";
import { Link } from "react-router-dom";

// component imports
import Text from "../../components/text/Text";
import Currency from "../../components/text/Currency";
import Percent from "../../components/text/Percent";

// style imports
import styles from "./styles/DashboardListItem.module.css";

type data = {
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  priceChange: number;
  marketCapChange: number;
};

const DashboardListItem: FC<data> = (props) => {
  return (
    <Link to={`/${props.symbol}/detail`} className={styles.link}>
      <li className={styles.container}>
        <div className={styles.item}>
          <img src={props.image} alt="" style={{ height: "40px" }} />
        </div>
        <div className={styles.item}>
          <Text>{props.name}</Text>
        </div>
        <div className={styles.item}>
          <Currency num={props.currentPrice} />
        </div>
        <div className={styles.item}>
          <Percent num={props.priceChange} />
        </div>
        <div className={styles.item}>
          <Percent num={props.marketCapChange} />
        </div>
      </li>
    </Link>
  );
};

export default DashboardListItem;
