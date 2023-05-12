// library imports
import React, { FC, Fragment, useContext } from "react";

// component imports
import ActionButton from "../components/ActionButton";
import Text from "../components/Text";
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const ErrorModal: FC = () => {
  const { error, resetError, sendRequestHandler } = useContext(CryptosContext);

  return (
    <Fragment>
      <header>
        <Title title="Something went wrong!" />
      </header>
      <Text text={error ? error : ""} />
      <footer>
        <ActionButton text="Retry" onClick={sendRequestHandler} />
        <ActionButton text="Close" onClick={resetError} />
      </footer>
    </Fragment>
  );
};

export default ErrorModal;
