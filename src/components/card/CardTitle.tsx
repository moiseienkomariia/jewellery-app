import React, { type PropsWithChildren } from "react";

const CardTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default CardTitle;
