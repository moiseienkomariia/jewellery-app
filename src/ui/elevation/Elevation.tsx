import React, { type ReactNode } from 'react';

type WithChildrenProps = { children?: ReactNode }

const Elevation: React.FC<WithChildrenProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Elevation;