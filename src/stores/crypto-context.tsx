import React, { createContext, FC, ReactNode, useState } from "react";
import useRequest from "../hooks/use-request";

import dataObj from "../assets/dataType";

const DUMMY_DATA = [
  { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
  { id: "ethereum", symbol: "eth", name: "Ethereum" },
];

type contextObj = {
  cryptos: dataObj[];
  sendRequestHandler: (url: string) => void;
};

export const CryptosContext = createContext<contextObj>({
  cryptos: [],
  sendRequestHandler: (url: string) => {},
});

const CryptosContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [cryptos, setCryptos] = useState<dataObj[]>(DUMMY_DATA);

  const sendRequest = useRequest();

  async function sendRequestHandler(url: string) {
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
