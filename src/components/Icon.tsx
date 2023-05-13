// library imports
import React, { FC, SVGProps } from "react";

const Icon: FC<{ icon: FC<SVGProps<SVGSVGElement>> }> = (props) => {
  return <props.icon />;
};

export default Icon;
