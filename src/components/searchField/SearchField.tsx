import React, { useCallback, useState } from "react";
import style from "./SearchField.module.scss";

// TODO usuń stare elementy i przenieś wszystko do jednego folderu, dodaj brakujce storiesy
interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchField = ({ value, placeholder }: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  return (
    <div className={style.searchField}>
      <div className={style.icon}></div>
      <input
        type="text"
        onChange={handleSearchInputChange}
        value={inputValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchField;
