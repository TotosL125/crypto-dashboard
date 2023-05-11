// library imports
import React, { FC } from "react";

type menuItem = {
  name: string;
  value: string | number;
};

const DetailsMenuItem: FC<menuItem> = (props) => {
  return (
    <li>
      <div>
        <p>{props.value}</p>
      </div>
      <p>{props.name}</p>
    </li>
  );
};

export default DetailsMenuItem;
