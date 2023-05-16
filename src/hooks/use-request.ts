// custom hook used to send http requests
const useRequest = () => {
  const sendRequest = async (url: string) => {
    const resp = await fetch(url); // send request and await response

    // check if response from CoinGecko
    if (!resp.ok) {
      throw new Error(`${resp.status}: ${resp.statusText}`); // "Error code: Error text"
    }

    // if response is good
    const data = await resp.json(); // get data from response
    return data;
  };
  return sendRequest; // return the function
};

export default useRequest;
