import React, { type JSX } from "react";

// TODO przerób na JSX.Element zamiast string. Pamiętaj o klasach cssowych.
interface TotalsSummaryProps {
  label: JSX.Element;
  value: JSX.Element;
}

const TotalsSummary: React.FC<TotalsSummaryProps> = ({label, value}) => {
  return (
    <div className={style.totalsSummary}>
      {label}
      {value}
    </div>
  );
};

export default TotalsSummary;
