// library imports
import React, { FC, useContext } from "react";

// component imports
import Text from "./Text";

// other imports
import { CryptosContext } from "../../stores/crypto-context";

// component function
const Currency: FC<{ num: number }> = (props) => {
  // declare state imported from context
  const { urlValues } = useContext(CryptosContext);

  // format number as currency based on currency state
  const numOutput = props.num.toLocaleString("en-US", {
    style: "currency",
    currency: urlValues.currency,
  });
  return <Text>{numOutput}</Text>;
};

export default Currency;
