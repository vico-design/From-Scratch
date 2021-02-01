import React, { useState } from "react";
import "./styles.css";

interface ISelectProps {
  title: string;
  options: string[];
  setter: (hola: string) => void;
}

const Select = ({ title, options, setter }: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = (option: string) => {
    setter(option);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      <div
        className={`${isOpen ? "filter-name-open" : "filter-name"}`}
        onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && (
        <ul className="options-container">
          {options.map(option => (
            <li key={option} onClick={() => onClickHandler(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
