import React, { type ChangeEvent } from "react";
import Input from "../../ui/Input/Input";

interface SearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
}

const Search: React.FC<SearchProps> = ({ value, onChange, icon }) => {
  return <Input value={value} onChange={onChange} icon={icon} />;
};

export default Search;
