// library imports
import React, { FC } from "react";

// component imports

// style imports
import styles from "./styles/RootLayoutFooter.module.css";

// component function
const RootLayoutFooter: FC = (props) => {
  // attribution to CoinGecko API
  return (
    <div className={styles.footer}>
      <h4>
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
      </h4>
    </div>
  );
};

export default RootLayoutFooter;
