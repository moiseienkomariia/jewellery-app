import React from "react";

// TODO mozesz zahardkowodwać walutę na potrzeby projektu, albo ustawić ja jako opcjonalna wartość propsa
export interface TotalsItemPropsInterface {
  label: string;
  value: string;
  currency: string;
}

const TotalsItem: React.FC<TotalsItemPropsInterface> = ({ label, value, currency }) => {
  return (
    <div>
      <div>{label}</div>
      <div>{value} {currency}</div>
    </div>
  );
};

export default TotalsItem;
