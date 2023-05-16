// library imports
import React, { FC, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

// feature imports
import DetailMenu from "../features/detail/DetailMenu";

// component imports
import Title from "../components/text/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";

// component function
const Detail: FC = () => {
  const params = useParams(); // access parameters in url

  // declare state imported from context
  const { cryptos } = useContext(CryptosContext);

  // extract current cryptocurrency from array
  const menuData = cryptos.filter((crypto) => crypto.symbol === params.id)[0];

  return (
    <Fragment>
      <Title>{`${menuData.name} Detail`}</Title>
      <DetailMenu data={menuData} />
    </Fragment>
  );
};

export default Detail;
