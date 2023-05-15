// library imports
import React, { FormEvent, FC, useContext, useRef } from "react";

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

const SettingsForm: FC = () => {
  const currencyInputRef = useRef<HTMLInputElement>(null);
  const perPageInputRef = useRef<HTMLInputElement>(null);

  const { urlHandler, settingsHandler, sendRequestHandler } =
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
          <input ref={currencyInputRef} id="currencyInput" type="text" />
        </div>
        <div className={styles["content-inputs"]}>
          <Label for="perPageInput">Number of Cryptocurrencies</Label>
          <input ref={perPageInputRef} id="perPageInput" type="text" />
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
