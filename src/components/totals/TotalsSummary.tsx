import React from 'react';

interface TotalsSummaryProps {
    label: string;
    value: string;
}

const TotalsSummary: React.FC<TotalsSummaryProps> = ({label, value}) => {

    return (
        <div>
            <div>{label}</div>
            <div>{value}</div>
        </div>
    );
};

export default TotalsSummary;