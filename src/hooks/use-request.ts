const useRequest = () => {
  const sendRequest = async (url: string) => {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`${resp.status}: ${resp.statusText}`);
    }

    const data = await resp.json();
    return data;
  };
  return sendRequest;
};

export default useRequest;
