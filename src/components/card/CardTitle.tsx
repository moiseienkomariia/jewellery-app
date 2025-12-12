import React from "react";

// TODO uzyj propa children
interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default CardTitle;
