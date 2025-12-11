import React from 'react';

export interface TotalsItemPropsInterface {
    label: string;
    value: string;
}

const TotalsItem: React.FC<TotalsItemPropsInterface> = ({label, value}) => {

    return (
        <div>
            <div>{label}</div>
            <div>{value}</div>
        </div>
    );
};

export default TotalsItem;