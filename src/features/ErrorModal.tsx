// library imports
import React, { FC, Fragment, useContext } from "react";

// component imports
import ActionButton from "../components/ActionButton";
import Text from "../components/Text";
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { arrow, cross } from "../assets/graphics";

const ErrorModal: FC = () => {
  const { error, resetError, sendRequestHandler } = useContext(CryptosContext);

  return (
    <Fragment>
      <header>
        <Title title="Something went wrong!" />
      </header>
      <Text text={error ? error : ""} />
      <footer>
        <ActionButton func={arrow} onClick={sendRequestHandler} />
        <ActionButton func={cross} onClick={resetError} />
      </footer>
    </Fragment>
  );
};

export default ErrorModal;
