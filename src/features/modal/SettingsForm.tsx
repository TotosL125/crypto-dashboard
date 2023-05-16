// library imports
import React, {
  FormEvent,
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// component imports
import ActionButton from "../../components/button/ActionButton";
import AltButton from "../../components/button/AltButton";
import Icon from "../../components/other/Icon";
import Label from "../../components/text/Label";
import Title from "../../components/text/Title";

//style imports
import styles from "./styles/SettingsForm.module.css";

// other imports
import { CryptosContext } from "../../stores/crypto-context";
import { Checkmark, Cross } from "../../assets/graphics";
import useRequest from "../../hooks/use-request";

// component function
const SettingsForm: FC = () => {
  // declare state and functions imported from context
  const { urlValues, urlHandler, settingsHandler } = useContext(CryptosContext);

  // declare state to store select options
  const [options, setOptions] = useState<[]>([]);

  // declare refs for input elements
  const currencyInputRef = useRef<HTMLSelectElement>(null);
  const perPageInputRef = useRef<HTMLInputElement>(null);

  // define function called on form submission
  const onSubmitHandler = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const updatedValues = {
        currency: currencyInputRef.current!.value,
        perPage: perPageInputRef.current!.value,
      };
      urlHandler(updatedValues); // update context state => trigger re-render and fetch request
      settingsHandler(); // toggle settings modal
    },
    [settingsHandler, urlHandler]
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
            ref={currencyInputRef}
            id="currencyInput"
            defaultValue={urlValues.currency}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["content-inputs"]}>
          <Label for="perPageInput">Number of Cryptocurrencies</Label>
          <input
            ref={perPageInputRef}
            id="perPageInput"
            type="number"
            min={1}
            defaultValue={urlValues.perPage}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <AltButton type="submit" onClick={settingsHandler}>
          <Icon icon={Cross} styleType="bad" />
        </AltButton>
        <ActionButton type="submit" onClick={() => {}}>
          <Icon icon={Checkmark} styleType="good" />
        </ActionButton>
      </div>
    </form>
  );
};

export default SettingsForm;
