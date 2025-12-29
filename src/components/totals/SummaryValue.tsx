interface SummaryValueProps {
    value: string;
    currency?: string;
}

const SummaryValue = ({value, currency}: SummaryValueProps) => {
    return (
        <div>{value} {currency}</div>
    )
}

export default SummaryValue;
