// library imports
import React, { FC, useContext } from "react";

// component imports
import Text from "./Text";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const Number: FC<{ num: number }> = (props) => {
  const { urlValues } = useContext(CryptosContext);

  const numOutput = props.num.toLocaleString("en-US", {
    style: "currency",
    currency: urlValues.currency,
  });
  return <Text>{numOutput}</Text>;
};

export default Number;
