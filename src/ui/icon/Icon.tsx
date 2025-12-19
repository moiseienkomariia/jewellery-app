import React from 'react';

interface IconProps {
    icon: string;
}
const Icon: React.FC<IconProps> = ({icon}) => {
    return (
        <div>
            <img src={`../../../public/${icon}.svg`} alt="" />
        </div>
    );
};

export default Icon;