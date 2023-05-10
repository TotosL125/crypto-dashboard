import React, { FC } from "react";

const Header: FC<{ title: string }> = (props) => {
  return <h1>{props.title}</h1>;
};

export default Header;
