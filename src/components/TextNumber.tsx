import React, { FC } from "react";

const TextNumber: FC<{ text: string; num: number }> = (props) => {
  let numStyle: string;

  if (props.num > 0) {
    numStyle = ``;
  } else {
    numStyle = ``;
  }
  return (
    <div>
      <p className={numStyle}>{props.text}</p>
    </div>
  );
};

export default TextNumber;
