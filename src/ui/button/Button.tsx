import React from "react";
import Icon from "../icon/Icon";
import style from "./Button.module.scss";

interface ButtonProps {
  label?: string;
  size: "sm" | "md" | "lg";
  type: "primary" | "secondary";
  onClick: () => void;
  icon?: string;
  iconOnly?: boolean;
}
// TODO przenieś do src/helpers
const css = (...classNames: (string | undefined | false)[]) =>
  classNames.filter(Boolean).join(" ");

// TODO uzywaj props.children zamiast label
const Button: React.FC<ButtonProps> = ({
  label,
  size,
  type,
  onClick,
  icon,
  iconOnly,
}) => {
  const styleSize = size && style[size];
  const styleType = type && style[type];

  return (
    <button onClick={onClick} className={css(styleSize, styleType)}>
      {icon && <Icon icon={icon} />}
      {!iconOnly && label}
    </button>
  );
};

export default Button;
