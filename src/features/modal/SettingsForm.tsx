// library imports
import React, {
  FormEvent,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// component imports
import ActionButton from "../../components/button/ActionButton";
import AltButton from "../../components/button/AltButton";
import Title from "../../components/text/Title";
import Label from "../../components/text/Label";

//style imports
import styles from "./styles/SettingsForm.module.css";

// other imports
import { CryptosContext } from "../../stores/crypto-context";
import { Checkmark, Cross } from "../../assets/graphics";
import useRequest from "../../hooks/use-request";

// component function
const SettingsForm: FC = () => {
  // declare state and functions imported from context
  const {
    currency,
    currencyChangeHandler,
    perPage,
    perPageChangeHandler,
    settingsHandler,
    sendRequestHandler,
  } = useContext(CryptosContext);

  // define state to store select options
  const [options, setOptions] = useState<[]>([]);

  // define function called on form submission
  const onSubmitHandler = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      sendRequestHandler(); // send request based on updated information
      settingsHandler(); // toggle settings modal
    },
    [sendRequestHandler, settingsHandler]
  ); // will only update when sendRequestHandler and settingsHandler update

  const sendRequest = useRequest(); // define request frunction imported from useRequest hook

  // define function to fetch currency options from CoinGecko
  const getOptions = useCallback(async () => {
    const opts = await sendRequest(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    ); // send request and await response
    setOptions(opts);
  }, [sendRequest]); // function will never change since sendRequest never changes

  // get options
  useEffect(() => {
    getOptions();
  }, [getOptions]); // will only run once when component is first rendered

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles.header}>
        <Title>Settings</Title>
      </div>
      <div className={styles.content}>
        <div className={styles["content-inputs"]}>
          <Label for="currencyInput">Currency</Label>
          <select
            id="currencyInput"
            value={currency}
            onChange={currencyChangeHandler}
          >
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className={styles["content-inputs"]}>
          <Label for="perPageInput">Number of Cryptocurrencies</Label>
          <input
            id="perPageInput"
            type="number"
            min={1}
            value={perPage}
            onChange={perPageChangeHandler}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <AltButton icon={Cross} styleType="bad" onClick={settingsHandler} />
        <ActionButton icon={Checkmark} styleType="good" onClick={() => {}} />
      </div>
    </form>
  );
};

export default SettingsForm;
