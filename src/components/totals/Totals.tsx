import TotalsHeader from "./TotalsHeader";
import TotalsSummary from "./TotalsSummary";
import TotalsItem, { type TotalsItemPropsInterface } from "./TotalsItem";
import SummaryLabel from "./SummaryLabel";
import SummaryValue from "./SummaryValue";

// TODO zastosuj kompozycję
interface TotalsProps {
  title: string;
  items: TotalsItemPropsInterface[];
}

const Totals = ({
  items,
}: TotalsProps) => {
  return (
    <div>
      <TotalsHeader>Header</TotalsHeader>

      {items &&
        items.map((item) => (
          <TotalsItem label={item.label} value={item.value} currency={item.currency} />
        ))}
      <TotalsSummary label={<SummaryLabel />} value={<SummaryValue />} />
    </div>
  );
};

export default Totals;
