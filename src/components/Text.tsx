import React, { FC } from "react";

const Text: FC<{ text: string }> = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default Text;
