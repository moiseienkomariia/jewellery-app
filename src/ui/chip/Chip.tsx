import React from 'react';
import Icon from "../icon/Icon";

interface ChipProps {
    label: string;
    icon: string;
}

const Chip: React.FC<ChipProps> = ({icon, label}) => {
    return (
        <div>
            <Icon icon={icon} />
            {label}
        </div>
    );
};

export default Chip;
