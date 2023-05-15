// library imports
import React, { FC, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

// feature imports
import DetailMenu from "../features/detail/DetailMenu";

// component imports
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";

const Detail: FC = () => {
  const params = useParams();
  const cryptosCtx = useContext(CryptosContext);

  const menuData = cryptosCtx.cryptos.filter(
    (crypto) => crypto.symbol === params.id
  )[0];

  return (
    <Fragment>
      <Title>{`${menuData.name} Detail`}</Title>
      <DetailMenu data={menuData} />
    </Fragment>
  );
};

export default Detail;
