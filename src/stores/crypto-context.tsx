// library imports
import React, {
  ChangeEvent,
  createContext,
  FC,
  ReactNode,
  useState,
} from "react";

// other imports
import useRequest from "../hooks/use-request";
import dataObj from "../assets/dataType";

type contextObj = {
  isLoading: boolean;
  error: string | undefined;
  resetError: () => void;
  showSettings: boolean;
  settingsHandler: () => void;
  currency: string;
  currencyChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  perPage: string;
  perPageChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  cryptos: dataObj[];
  sendRequestHandler: () => void;
};

export const CryptosContext = createContext<contextObj>({
  isLoading: false,
  error: undefined,
  resetError: () => {},
  showSettings: false,
  settingsHandler: () => {},
  currency: "",
  currencyChangeHandler: (event: ChangeEvent<HTMLInputElement>) => {},
  perPage: "",
  perPageChangeHandler: (event: ChangeEvent<HTMLInputElement>) => {},
  cryptos: [],
  sendRequestHandler: () => {},
});

const CryptosContextProvider: FC<{ children?: ReactNode }> = (props) => {
  const [isLoading, setIsLoading] = useState<contextObj["isLoading"]>(false);
  const [error, setError] = useState<contextObj["error"]>();
  const [showSettings, setShowSettings] =
    useState<contextObj["showSettings"]>(false);

  const [currency, setCurrency] = useState<contextObj["currency"]>("zar");
  const [perPage, setPerPage] = useState<contextObj["perPage"]>("10");

  const [cryptos, setCryptos] = useState<dataObj[]>([]);

  const sendRequest = useRequest();

  function resetError() {
    setError(undefined);
  }

  function settingsHandler() {
    setShowSettings((prevState) => !prevState);
  }

  function currencyChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setCurrency(event.target.value);
  }

  function perPageChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setPerPage(event.target.value);
  }

  async function sendRequestHandler() {
    setIsLoading(true);
    setError(undefined);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false&locale=en`;

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
    setIsLoading(false);
  }

  const contextValue: contextObj = {
    isLoading,
    error,
    resetError,
    showSettings,
    settingsHandler,
    currency,
    currencyChangeHandler,
    perPage,
    perPageChangeHandler,
    cryptos,
    sendRequestHandler,
  };

  return (
    <CryptosContext.Provider value={contextValue}>
      {props.children}
    </CryptosContext.Provider>
  );
};

export default CryptosContextProvider;
