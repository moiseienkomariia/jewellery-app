import React from "react";

interface CardImageProps {
  src: string;
  alt?: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt ? alt : ""} />
    </div>
  );
};

export default CardImage;
