import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

import Button from "../../ui/button/Button";
import CardDescription from "./CardDescription";
import CardActions from "./CardActions";
import { Elevation } from "../elevation/Elevation";

interface CardProps {
  title: string;
  description: string;
  buttonLabel: string;
  action: () => void;
}

// TODO tez powinien uzywac children oraz Elevation
const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonLabel,
  action,
}) => {
  return (
    <Elevation standalone>
      <div>
        <CardImage src="../../../public/card.png" />
        <CardTitle title={title} />
        <CardDescription description={description} />
        <CardActions>
          <Button
            size="sm"
            type="primary"
            label={buttonLabel}
            onClick={action}
          />
        </CardActions>
      </div>
    </Elevation>
  );
};

export default Card;
