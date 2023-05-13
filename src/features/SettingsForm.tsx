// library imports
import React, { FormEvent, FC, useContext, useRef } from "react";

// component imports
import ActionButton from "../components/ActionButton";
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { checkmark } from "../assets/graphics";

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
    <form onSubmit={onSubmitHandler}>
      <header>
        <Title title="Settings" />
      </header>
      <main>
        <input ref={currencyInputRef} type="text" value={urlValues.currency} />
        <input ref={perPageInputRef} type="text" value={urlValues.perPage} />
      </main>
      <footer>
        <ActionButton func={checkmark} onClick={() => {}} />
      </footer>
    </form>
  );
};

export default SettingsForm;
