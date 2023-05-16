// library imports
import React, { FC } from "react";
import { Link } from "react-router-dom";

// component imports
import Title from "../components/text/Title";
import Text from "../components/text/Text";

// style imports
import styles from "./styles/Error.module.css";

// component function
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
