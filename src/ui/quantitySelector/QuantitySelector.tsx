import React from 'react';

interface QuantitySelectorProps {
    value: string;
    onIncrement: () => void;
    onDecrement: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({value, onDecrement, onIncrement}) => {

    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <div>
                {value}
            </div>
            <button onClick={onIncrement}>+</button>
        </div>
    );
};

export default QuantitySelector;