import { useState } from "react";
import { FilterSum } from "../FilterSum/FilterSum";

export const FilterSumContainer = ({ className }) => {
  const [inputFromSumValue, setInputFromSumValue] = useState("");
  const [inputToSumValue, setInputToSumValue] = useState("");

  const handleChangehValueFromSumInput = (event) => {
    setInputFromSumValue(event.target.value);
  };

  const handleChangehValueToSumInput = (event) => {
    setInputToSumValue(event.target.value);
  };

  const handleClearValueFromSumInput = () => {
    setInputFromSumValue("");
  };
  const handleClearValueToSumInput = () => {
    setInputToSumValue("");
  };

  return (
    <FilterSum
      className={className}
      inputFromSumValue={inputFromSumValue}
      inputToSumValue={inputToSumValue}
      onChangehValueFromSumInput={handleChangehValueFromSumInput}
      onChangehValueToSumInput={handleChangehValueToSumInput}
      onClearValueFromSumInput={handleClearValueFromSumInput}
      onClearValueToSumInput={handleClearValueToSumInput}
    />
  );
};