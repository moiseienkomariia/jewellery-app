import React from "react";
import TotalsHeader from "./TotalsHeader";
import TotalsSummary from "./TotalsSummary";
import TotalsItem, { type TotalsItemPropsInterface } from "./TotalsItem";

// TODO zastosuj kompozycję
interface TotalsProps {
  title: string;
  items: TotalsItemPropsInterface[];
  summaryLabel: string;
  summaryValue: string;
}

const Totals: React.FC<TotalsProps> = ({
  title,
  items,
  summaryLabel,
  summaryValue,
}) => {
  console.log(items);
  return (
    <div>
      <TotalsHeader title={title} />

      {items &&
        items.map((item) => (
          <TotalsItem label={item.label} value={item.value} />
        ))}
      {/* <TotalsItem label={item.label} value={item.value} /> */}
      <TotalsSummary label={summaryLabel} value={summaryValue} />
    </div>
  );
};

export default Totals;
