import React, { FC } from "react";

const ActionButton: FC<{
  func: string;
  onClick: () => void;
}> = (props) => {
  return (
    <button onClick={props.onClick}>
      <img src={props.func} alt={props.func} />
    </button>
  );
};

export default ActionButton;
