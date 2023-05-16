// library imports
import React, { FormEvent, FC, useContext } from "react";

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
  const {
    currency,
    currencyChangeHandler,
    perPage,
    perPageChangeHandler,
    settingsHandler,
    sendRequestHandler,
  } = useContext(CryptosContext);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

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
            id="currencyInput"
            type="text"
            value={currency}
            onChange={currencyChangeHandler}
          />
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
