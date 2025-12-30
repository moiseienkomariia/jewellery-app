import React, { type PropsWithChildren } from "react";
import style from "./Totals.module.scss";


const TotalsSummary: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={style.totalsSummary}>
      {children}
    </div>
  );
};

export default TotalsSummary;
