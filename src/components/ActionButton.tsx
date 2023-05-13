import React, { FC, SVGProps } from "react";

const ActionButton: FC<{
  func: string | FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}> = (props) => {
  if (typeof props.func === "string") {
    return <button onClick={props.onClick}>{props.func}</button>;
  } else {
    return (
      <button onClick={props.onClick}>
        <props.func />
      </button>
    );
  }
};

export default ActionButton;
