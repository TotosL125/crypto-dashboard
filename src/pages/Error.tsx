// library imports
import React, { FC } from "react";
import { Link } from "react-router-dom";

// component imports
import Title from "../components/Title";
import Text from "../components/Text";

import styles from "./styles/Error.module.css";

const ErrorPage: FC = () => {
  return (
    <div className={styles.layout}>
      <Title>404 Not Found</Title>
      <Text>Congratulations! You have reached the end of the internet...</Text>
      <Link to="/">
        <Text>Go back to safety!</Text>
      </Link>
    </div>
  );
};

export default ErrorPage;
