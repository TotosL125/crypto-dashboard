import React, { FC } from "react";

const ActionButton: FC<{
  text: string;
  onClick: () => void;
}> = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default ActionButton;
