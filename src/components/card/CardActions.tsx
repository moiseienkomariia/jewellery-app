import React, { type ReactNode } from 'react';

type WithChildrenProps = { children?: ReactNode }

const CardDescription: React.FC<WithChildrenProps> = ({children}) => {

    return (
        <>{children}</>
    );
};

export default CardDescription;