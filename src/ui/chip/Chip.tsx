import { type PropsWithChildren } from "react";
import Icon from "../Icon/Icon";
import { css } from "@helpers";
import style from "./Chip.module.scss";

export interface ChipProps {
  icon: string;
  onClick: () => void;
  isSelected: boolean;
}

export const Chip = ({
  icon,
  isSelected,
  children,
  onClick,
}: PropsWithChildren<ChipProps>) => {
  return (
    <div
      className={css("chip", isSelected && style.selected)}
      onClick={onClick}
    >
      <Icon icon={icon} />
      {children}
    </div>
  );
};
