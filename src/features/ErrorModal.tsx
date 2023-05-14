// library imports
import React, { FC, Fragment, useContext } from "react";

// component imports
import ActionButton from "../components/ActionButton";
import Text from "../components/Text";
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { Cross, Reload } from "../assets/graphics";

const ErrorModal: FC = () => {
  const { error, resetError, sendRequestHandler } = useContext(CryptosContext);

  return (
    <Fragment>
      <header>
        <Title>Something went wrong!</Title>
      </header>
      <Text>{error ? error : ""}</Text>
      <footer>
        <ActionButton
          icon={Reload}
          styleType="normal"
          onClick={sendRequestHandler}
        />
        <ActionButton icon={Cross} styleType="bad" onClick={resetError} />
      </footer>
    </Fragment>
  );
};

export default ErrorModal;
