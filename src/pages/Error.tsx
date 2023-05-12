// library imports
import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

// component imports
import Title from "../components/Title";

const ErrorPage: FC = () => {
  return (
    <Fragment>
      <Title title="404 Not Found" />
      <Link to="/">
        <p>Go back to safety!</p>
      </Link>
      <p>Congratulations! You have reached the end of the internet...</p>
    </Fragment>
  );
};

export default ErrorPage;
