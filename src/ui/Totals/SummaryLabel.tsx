interface SummaryLabelProps {
    label: string;
}

const SummaryLabel = ({label}: SummaryLabelProps) => {
    return (
        <div>{label}</div>
    )
}

export default SummaryLabel;
