// library imports
import React, { createContext, FC, ReactNode, useState } from "react";

// other imports
import useRequest from "../hooks/use-request";
import dataObj from "../assets/dataType";

type contextObj = {
  cryptos: dataObj[];
  sendRequestHandler: () => void;
};

export const CryptosContext = createContext<contextObj>({
  cryptos: [],
  sendRequestHandler: () => {},
});

const CryptosContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [cryptos, setCryptos] = useState<dataObj[]>([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  const sendRequest = useRequest();

  async function sendRequestHandler() {
    const data = await sendRequest(url);
    setCryptos(data);
  }

  const contextValue: contextObj = {
    cryptos,
    sendRequestHandler,
  };

  return (
    <CryptosContext.Provider value={contextValue}>
      {children}
    </CryptosContext.Provider>
  );
};

export default CryptosContextProvider;
