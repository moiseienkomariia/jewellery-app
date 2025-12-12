import React from "react";

// TODO zamiast label uzyj nazwy "alt"
interface CardImageProps {
  src: string;
  label?: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, label }) => {
  return (
    <div>
      <img src={src} alt={label ? label : ""} />
    </div>
  );
};

export default CardImage;
