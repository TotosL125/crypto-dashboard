// library imports
import React, { FC } from "react";

// style imports
import styles from "./styles/RootLayoutFooter.module.css";

const RootLayoutFooter: FC = (props) => {
  return (
    <div className={styles.footer}>
      <p>
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
      </p>
    </div>
  );
};

export default RootLayoutFooter;
