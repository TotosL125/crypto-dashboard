// library imports
import React, { createContext, FC, ReactNode, useState } from "react";

// other imports
import useRequest from "../hooks/use-request";
import dataObj from "../assets/dataType";

type contextObj = {
  isLoading: boolean;
  error: string | undefined;
  resetError: () => void;
  showSettings: boolean;
  settingsHandler: () => void;
  urlValues: { currency: string; perPage: string };
  urlHandler: (data: contextObj["urlValues"]) => void;
  cryptos: dataObj[];
  sendRequestHandler: () => void;
};

export const CryptosContext = createContext<contextObj>({
  isLoading: false,
  error: undefined,
  resetError: () => {},
  showSettings: false,
  settingsHandler: () => {},
  urlValues: { currency: "", perPage: "" },
  urlHandler: (data: contextObj["urlValues"]) => {},
  cryptos: [],
  sendRequestHandler: () => {},
});

const CryptosContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<contextObj["isLoading"]>(false);
  const [error, setError] = useState<contextObj["error"]>();
  const [showSettings, setShowSettings] =
    useState<contextObj["showSettings"]>(false);

  const [urlValues, setUrlValues] = useState<contextObj["urlValues"]>({
    currency: "zar",
    perPage: "10",
  });
  const [cryptos, setCryptos] = useState<dataObj[]>([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${urlValues.currency}&order=market_cap_desc&per_page=${urlValues.perPage}&page=1&sparkline=false&locale=en`;

  const sendRequest = useRequest();

  function resetError() {
    setError(undefined);
  }

  function settingsHandler() {
    setShowSettings((prevState) => !prevState);
  }

  function urlHandler(data: contextObj["urlValues"]) {
    setUrlValues(data);
  }

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

  const contextValue: contextObj = {
    isLoading,
    error,
    resetError,
    showSettings,
    settingsHandler,
    urlValues,
    urlHandler,
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
