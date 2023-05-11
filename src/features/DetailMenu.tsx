// library imports
import React, { FC } from "react";

// feature imports
import DetailMenuItem from "./DetailMenuItem";

// other imports
import dataObj from "../assets/dataType";

type menu = {
  data: dataObj;
};

const DetailMenu: FC<menu> = (props) => {
  const menuItems = Object.entries(props.data);
  return (
    <ul>
      {menuItems.map((item) => (
        <DetailMenuItem name={item[0]} value={item[1]} />
      ))}
    </ul>
  );
};

export default DetailMenu;
