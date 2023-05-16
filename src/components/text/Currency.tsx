// library imports
import React, { FC, useContext } from "react";

// component imports
import Text from "./Text";

// other imports
import { CryptosContext } from "../../stores/crypto-context";

const Currency: FC<{ num: number }> = (props) => {
  const { currency } = useContext(CryptosContext);

  const numOutput = props.num.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
  return <Text>{numOutput}</Text>;
};

export default Currency;
