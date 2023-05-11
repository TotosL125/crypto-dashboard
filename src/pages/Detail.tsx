// library imports
import React, { FC } from "react";
import { Link } from "react-router-dom";

// feature imports

// component imports
import ActionButton from "../components/ActionButton";
import Title from "../components/Title";

// other imports

const Detail: FC = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <ActionButton title="Back" onClick={() => {}} />
        </Link>
      </header>
      <Title title="Details" />
    </div>
  );
};

export default Detail;
