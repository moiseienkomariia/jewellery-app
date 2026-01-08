import React, { type ChangeEvent } from "react";
import Icon from "../Icon/Icon";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, icon }) => {
  return (
    <div>
      {icon && <Icon icon={icon} />}
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
