import React from 'react';

interface CardDescriptionProps {
    description: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({description}) => {

    return (
        <div>{description}</div>
    );
};

export default CardDescription;