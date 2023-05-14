// library imports
import React, { FormEvent, FC, useContext, useRef } from "react";

// component imports
import ActionButton from "../components/ActionButton";
import Title from "../components/Title";
import Label from "../components/Label";

//style imports
import styles from "./styles/SettingsForm.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { Checkmark, Cross } from "../assets/graphics";

const SettingsForm: FC = () => {
  const currencyInputRef = useRef<HTMLInputElement>(null);
  const perPageInputRef = useRef<HTMLInputElement>(null);

  const { urlValues, urlHandler, settingsHandler, sendRequestHandler } =
    useContext(CryptosContext);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    urlHandler({
      currency: currencyInputRef.current!.value,
      perPage: perPageInputRef.current!.value,
    });
    sendRequestHandler();
    settingsHandler();
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles.header}>
        <Title>Settings</Title>
      </div>
      <div className={styles.content}>
        <div className={styles["content-inputs"]}>
          <Label for="currencyInput">Currency</Label>
          <input
            ref={currencyInputRef}
            id="currencyInput"
            type="text"
            value={urlValues.currency}
          />
        </div>
        <div className={styles["content-inputs"]}>
          <Label for="perPageInput">Number of Cryptocurrencies</Label>
          <input
            ref={perPageInputRef}
            id="perPageInput"
            type="text"
            value={urlValues.perPage}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <ActionButton icon={Cross} styleType="bad" onClick={settingsHandler} />
        <ActionButton icon={Checkmark} styleType="good" onClick={() => {}} />
      </div>
    </form>
  );
};

export default SettingsForm;
