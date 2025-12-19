import { type PropsWithChildren } from "react";
import Icon from "../icon/Icon";

export interface ChipProps {
  icon: string;
}

const Chip = ({ icon, children }: PropsWithChildren<ChipProps>) => {
  return (
    <div className={"chip"}>
      <Icon icon={icon} />
      {children}
    </div>
  );
};
