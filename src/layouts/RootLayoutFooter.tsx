// library imports
import React, { FC } from "react";

// component imports
import Text from "../components/text/Text";

// style imports
import styles from "./styles/RootLayoutFooter.module.css";

const RootLayoutFooter: FC = (props) => {
  return (
    <div className={styles.footer}>
      <Text>
        Powered by{" "}
        {
          <a
            target="_bank"
            rel="noreferrer"
            href="https://www.coingecko.com/en/api"
          >
            CoinGecko API
          </a>
        }
      </Text>
    </div>
  );
};

export default RootLayoutFooter;
