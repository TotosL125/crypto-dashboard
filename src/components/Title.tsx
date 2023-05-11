import React, { FC } from "react";

const Title: FC<{ title: string }> = (props) => {
  return <h1>{props.title}</h1>;
};

export default Title;
