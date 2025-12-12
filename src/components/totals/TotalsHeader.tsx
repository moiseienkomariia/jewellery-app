import React from "react";

// TODO children
interface TotalsHeaderProps {
  title: string;
}

const TotalsHeader: React.FC<TotalsHeaderProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default TotalsHeader;
