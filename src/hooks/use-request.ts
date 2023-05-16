// library imports
import { useCallback } from "react";

// custom hook used to send http requests
const useRequest = () => {
  const sendRequest = useCallback(async (url: string) => {
    const resp = await fetch(url); // send request and await response

    // check if response from CoinGecko
    if (!resp.ok) {
      const err = `${resp.status}: ${resp.statusText}`;
      throw new Error(err); // "Error code: Error text"
    }

    // if response is good
    const data = await resp.json(); // get data from response
    return data;
  }, []); // function only defined once
  return sendRequest; // return the function
};

export default useRequest;
