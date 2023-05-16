// library imports
import React, { FC, useContext } from "react";

// component imports
import ActionButton from "../../components/button/ActionButton";
import AltButton from "../../components/button/AltButton";
import Icon from "../../components/other/Icon";
import Label from "../../components/text/Label";
import Title from "../../components/text/Title";

// style imports
import styles from "./styles/ErrorModal.module.css";

// other imports
import { CryptosContext } from "../../stores/crypto-context";
import { Cross, Reload } from "../../assets/graphics";

// component function
const ErrorModal: FC = () => {
  // declare states and functions imported from context
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
        <AltButton onClick={resetError}>
          <Icon icon={Cross} styleType="bad" />
        </AltButton>
        <ActionButton onClick={sendRequestHandler}>
          <Icon icon={Reload} styleType="normal" />
        </ActionButton>
      </div>
    </div>
  );
};

export default ErrorModal;
