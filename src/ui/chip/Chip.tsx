import React, { type PropsWithChildren } from "react";
import Icon from "../icon/Icon";

export interface ChipProps {
  icon: string;
}

export const Chip: React.FC<ChipProps> = ({
  icon,
  children,
}: PropsWithChildren<ChipProps>) => {
  return (
    <div className={"chip"}>
      <Icon icon={icon} />
      {children}
    </div>
  );
};

