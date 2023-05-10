import React, { FC } from "react";

const ActionButton: FC<{
  title: string;
  onClick: () => void;
}> = (props) => {
  return <button onClick={props.onClick}>{props.title}</button>;
};

export default ActionButton;
