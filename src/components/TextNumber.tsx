import React, { FC } from "react";

const TextNumber: FC<{ num: number }> = (props) => {
  return (
    <div>
      <p>{props.num}%</p>
    </div>
  );
};

export default TextNumber;
