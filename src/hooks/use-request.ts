const useRequest = () => {
  const sendRequest = async (url: string) => {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error("Request failed...");
    }

    const data = await resp.json();
    return data;
  };
  return sendRequest;
};

export default useRequest;
