import React, { type PropsWithChildren } from "react";
import { Elevation } from "../elevation/Elevation";

export const Card: React.FC<PropsWithChildren> = ({
 children
}) => {
  return (
    <Elevation standalone>
     {children}
    </Elevation>
  );
};

