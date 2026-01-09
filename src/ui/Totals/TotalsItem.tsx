import React from "react";
import style from "./Totals.module.scss";

export interface TotalsItemPropsInterface {
  label: string;
  value: string;
  currency?: string;
}

const TotalsItem: React.FC<TotalsItemPropsInterface> = ({ label, value, currency }) => {
  return (
    <div className={style.totalsItem}>
      <div>{label}</div>
      <div>{value} {currency}</div>
    </div>
  );
};

export default TotalsItem;
