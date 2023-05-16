// library imports
import React, {
  ChangeEvent,
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

// other imports
import useRequest from "../hooks/use-request";
import dataObj from "../assets/dataType";

// define type of data accessible from the provider
type contextObj = {
  isLoading: boolean;
  error: string | undefined;
  resetError: () => void;
  showSettings: boolean;
  settingsHandler: () => void;
  currency: string;
  currencyChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  perPage: string;
  perPageChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  cryptos: dataObj[];
  sendRequestHandler: () => void;
};

// create context and export as a named export
export const CryptosContext = createContext<contextObj>({
  isLoading: false,
  error: undefined,
  resetError: () => {},
  showSettings: false,
  settingsHandler: () => {},
  currency: "",
  currencyChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => {},
  perPage: "",
  perPageChangeHandler: (event: ChangeEvent<HTMLInputElement>) => {},
  cryptos: [],
  sendRequestHandler: () => {},
});

// component function
const CryptosContextProvider: FC<{ children?: ReactNode }> = (props) => {
  // declare states that alter the display
  const [isLoading, setIsLoading] = useState<contextObj["isLoading"]>(false);
  const [error, setError] = useState<contextObj["error"]>();
  const [showSettings, setShowSettings] =
    useState<contextObj["showSettings"]>(false);

  // declare states that hold values
  const [currency, setCurrency] = useState<contextObj["currency"]>("zar");
  const [perPage, setPerPage] = useState<contextObj["perPage"]>("10");
  const [cryptos, setCryptos] = useState<dataObj[]>([]);

  // url string declaration
  const url = useMemo(() => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false&locale=en`;
  }, [currency, perPage]); // url will only change when currency and/or perPage values change

  // define function imported from useRequest hook
  const sendRequest = useRequest();

  // define function to remove error
  const resetError = useCallback(() => {
    setError(undefined); // remove error to hide error modal
  }, []); // only defined once at start

  //define function to toggle settings modal
  const settingsHandler = useCallback(() => {
    setShowSettings((prevState) => !prevState);
  }, []); // only defined once at start

  // define function to watch for changes to currency input
  const currencyChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setCurrency(event.target.value);
    },
    []
  ); // only defined once at start

  // define function to watch for changes to perPage input
  const perPageChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPerPage(event.target.value);
    },
    []
  ); // only defined once at start

  // define function to send http requests
  const sendRequestHandler = useCallback(async () => {
    setIsLoading(true);
    setError(undefined); // remove any errors

    try {
      const data = await sendRequest(url); // send request and await response
      setCryptos(data); // save received data in cryptos constant
    } catch (err) {
      let errorMessage: string;

      // check if error is of type Error or string
      if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage = String(err);
      }

      setError(errorMessage);
    }

    setIsLoading(false);
  }, [sendRequest, url]); // will only change when sendRequest and/or url changes

  // define value of context provider output
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
