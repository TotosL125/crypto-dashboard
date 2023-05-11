// library imports
import React, { FC } from "react";

// component imports
import Text from "../components/Text";

const DashboardListHeader: FC = () => {
  return (
    <header>
      <Text text="Name" />
      <Text text="Current Price" />
      <Text text="Price Change" />
      <Text text="Market Cap" />
      <Text text="Market Cap Change" />
    </header>
  );
};

export default DashboardListHeader;
