// library imports
import React, { FC, useContext } from "react";

// component imports
import ActionButton from "../components/ActionButton";
import Label from "../components/Label";
import Title from "../components/Title";

// style imports
import styles from "./styles/ErrorModal.module.css";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { Cross, Reload } from "../assets/graphics";

const ErrorModal: FC = () => {
  const { error, resetError, sendRequestHandler } = useContext(CryptosContext);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Title>Error!</Title>
      </div>
      <div className={styles.content}>
        <Label>{error ? error : ""}</Label>
      </div>
      <div className={styles.footer}>
        <ActionButton
          icon={Reload}
          styleType="normal"
          onClick={sendRequestHandler}
        />
        <ActionButton icon={Cross} styleType="bad" onClick={resetError} />
      </div>
    </div>
  );
};

export default ErrorModal;
