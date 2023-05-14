// library imports
import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

// component imports
import Title from "../components/Title";
import Text from "../components/Text";

const ErrorPage: FC = () => {
  return (
    <Fragment>
      <Title title="404 Not Found" />
      <Link to="/">
        <p>Go back to safety!</p>
      </Link>
      <Text>Congratulations! You have reached the end of the internet...</Text>
    </Fragment>
  );
};

export default ErrorPage;
