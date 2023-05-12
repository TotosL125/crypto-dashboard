// library imports
import React, { FC, Fragment, useContext } from "react";

// feature imports
import DetailMenuItem from "./DetailMenuItem";

// component imports
import Loading from "../components/Loading";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import dataObj from "../assets/dataType";

type menu = {
  data: dataObj;
};

const DetailMenu: FC<menu> = (props) => {
  const { isLoading } = useContext(CryptosContext);
  const menuItems = Object.entries(props.data);

  return (
    <Fragment>
      {isLoading && <Loading />}
      <ul>
        {menuItems.map((item) => (
          <DetailMenuItem name={item[0]} value={item[1]} />
        ))}
      </ul>
    </Fragment>
  );
};

export default DetailMenu;
