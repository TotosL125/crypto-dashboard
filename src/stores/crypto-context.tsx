// library imports
import React, { createContext, FC, ReactNode, useState } from "react";

// other imports
import useRequest from "../hooks/use-request";
import dataObj from "../assets/dataType";

type contextObj = {
  isLoading: boolean;
  error: string | undefined;
  cryptos: dataObj[];
  resetError: () => void;
  sendRequestHandler: () => void;
};

export const CryptosContext = createContext<contextObj>({
  isLoading: false,
  error: undefined,
  cryptos: [],
  resetError: () => {},
  sendRequestHandler: () => {},
});

const CryptosContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [cryptos, setCryptos] = useState<dataObj[]>([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=eng";

  const sendRequest = useRequest();

  async function sendRequestHandler() {
    setIsLoading(true);
    setError(undefined);

    try {
      const data = await sendRequest(url);
      setCryptos(data);
    } catch (err) {
      let errorMessage: string;

      if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage = String(err);
      }

      setError(errorMessage);
    }
  }

  function resetError() {
    setError(undefined);
  }

  const contextValue: contextObj = {
    isLoading,
    error,
    cryptos,
    resetError,
    sendRequestHandler,
  };

  return (
    <CryptosContext.Provider value={contextValue}>
      {children}
    </CryptosContext.Provider>
  );
};

export default CryptosContextProvider;
