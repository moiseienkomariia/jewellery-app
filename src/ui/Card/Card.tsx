import React, { type PropsWithChildren } from "react";
import { Elevation } from "../Elevation/Elevation";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <Elevation standalone>{children}</Elevation>;
};
