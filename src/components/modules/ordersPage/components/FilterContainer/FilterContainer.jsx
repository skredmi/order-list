import { useState } from "react";
import { Filter } from "../Filter/Filter";

export const FilterContainer = ({ className }) => {
  const [inputSeacrhValue, setInputSeacrhValue] = useState("");
  const [isOpenFiltersContainer, setIsOpenFiltersContainer] = useState(false);

  const handleChangehValueSeacrhInput = (event) => {
    setInputSeacrhValue(event.target.value);
  };

  const handleClearValue = () => {
    setInputSeacrhValue("");
  };

  const handleOpenFiltersContainer = () => {
    setIsOpenFiltersContainer(!isOpenFiltersContainer);
  };

  return (
    <Filter
      className={className}
      inputSearchValue={inputSeacrhValue}
      onChangeInputSeacrhValue={handleChangehValueSeacrhInput}
      onClearInputValue={handleClearValue}
      onOpenFiltersContainer={handleOpenFiltersContainer}
      isOpenFiltersContainer={isOpenFiltersContainer}
    />
  );
};
