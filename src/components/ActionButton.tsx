// library imports
import React, { FC, SVGProps } from "react";

// component imports
import Icon from "./Icon";

const ActionButton: FC<{
  icon?: FC<SVGProps<SVGSVGElement>>;
  text?: string;
  onClick: () => void;
}> = (props) => {
  if (props.text) {
    return <button onClick={props.onClick}>{props.text}</button>;
  } else {
    return (
      <button onClick={props.onClick}>
        <Icon icon={props.icon!} />
      </button>
    );
  }
};

export default ActionButton;
