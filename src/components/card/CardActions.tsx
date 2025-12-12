import React, { type ReactNode } from "react";

// TODO gotowy interface z React PropsWithChildren
type WithChildrenProps = { children?: ReactNode };

const CardDescription: React.FC<WithChildrenProps> = ({ children }) => {
  return <>{children}</>;
};

export default CardDescription;
