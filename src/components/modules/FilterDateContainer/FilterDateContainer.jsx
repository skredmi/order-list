import { useState } from "react";
import { FilterDate } from "../FilterDate/FilterDate";

export const FilterDateContainer = ({ className }) => {
  const [inputStartDateValue, setInputStartDateValue] = useState("");
  const [inputEndDateValue, setInputEndDateValue] = useState("");

  const handleChangehValueStartDateInput = (event) => {
    setInputStartDateValue(event.target.value);
  };

  const handleChangehValueEndDateInput = (event) => {
    setInputEndDateValue(event.target.value);
  };

  const handleClearValueStartDateInput = () => {
    setInputStartDateValue("");
  };
  const handleClearValueEndDateInput = () => {
    setInputEndDateValue("");
  };

  return (
    <FilterDate
      className={className}
      inputStartDateValue={inputStartDateValue}
      inputEndDateValue={inputEndDateValue}
      onChangeInputStartDateValue={handleChangehValueStartDateInput}
      onChangeInputEndDateValue={handleChangehValueEndDateInput}
      onClearInputStartDateValue={handleClearValueStartDateInput}
      onClearInputEndDateValue={handleClearValueEndDateInput}
    />
  );
};
