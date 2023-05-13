// library imports
import React, { FC, useContext } from "react";
import { Link, useParams } from "react-router-dom";

// feature imports
import DetailMenu from "../features/DetailMenu";

// component imports
import ActionButton from "../components/ActionButton";
import Title from "../components/Title";

// other imports
import { CryptosContext } from "../stores/crypto-context";
import { house } from "../assets/graphics";

const Detail: FC = () => {
  const params = useParams();
  const cryptosCtx = useContext(CryptosContext);

  const menuData = cryptosCtx.cryptos.filter(
    (crypto) => crypto.symbol === params.id
  )[0];

  return (
    <div>
      <header>
        <Link to="/">
          <ActionButton func={house} onClick={() => {}} />
        </Link>
      </header>
      <Title title={`${menuData.name} Detail`} />
      <DetailMenu data={menuData} />
    </div>
  );
};

export default Detail;
