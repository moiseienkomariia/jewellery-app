import TotalsHeader from "./TotalsHeader";
import TotalsSummary from "./TotalsSummary";
import TotalsItem, { type TotalsItemPropsInterface } from "./TotalsItem";
import style from "./Totals.module.scss";
import type { PropsWithChildren } from "react";
import SummaryLabel from "./SummaryLabel";
import SummaryValue from "./SummaryValue";

interface TotalsProps {
  items: TotalsItemPropsInterface[];
}

const Totals = ({ items }: PropsWithChildren<TotalsProps>) => {
  return (
    <div className={style.totals}>
      <TotalsHeader>Header</TotalsHeader>

      {items &&
        items.map((item) => (
          <TotalsItem
            label={item.label}
            value={item.value}
            currency={item.currency}
          />
        ))}
      <TotalsSummary>
        <SummaryLabel label="Total" />
        <SummaryValue value="50" currency="$" />
      </TotalsSummary>
    </div>
  );
};

export default Totals;
