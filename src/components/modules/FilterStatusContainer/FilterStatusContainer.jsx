import { useState } from "react";
import { FilterStatus } from "../FilterStatus/FilterStatus";

export const FilterStatusContainer = () => {
  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);
  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  return (
    <FilterStatus
      isOpenDropdownStatus={isOpenDropdownStatus}
      handlOpenDropdownStatusClick={handlOpenDropdownStatusClick}
    />
  );
};
