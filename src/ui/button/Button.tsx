import { type PropsWithChildren } from "react";
import Icon from "../Icon/Icon";
import style from "./Button.module.scss";
import { css } from "@helpers";

interface ButtonProps {
  label?: string;
  size: "sm" | "md" | "lg";
  type: "primary" | "secondary";
  onClick: () => void;
  icon?: string;
  iconOnly?: boolean;
}

const Button = ({
  size,
  type,
  onClick,
  icon,
  iconOnly,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const styleSize = size && style[size];
  const styleType = type && style[type];

  return (
    <button onClick={onClick} className={css(styleSize, styleType)}>
      {icon && <Icon icon={icon} />}
      {!iconOnly && children}
    </button>
  );
};

export default Button;
