import { createContext, useMemo, useState, useCallback } from "react";

export const FilterContext = createContext();

export const FILTER_STATUSES = {
  any: "Любой",
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  cancelled: "Отменен",
};

export const FilterContextProvider = ({ children }) => {
  // filters dropdown open

  const [isOpenFiltersContainer, setIsOpenFiltersContainer] = useState(false);

  const handleOpenFiltersContainer = useCallback(() => {
    setIsOpenFiltersContainer(!isOpenFiltersContainer);
  }, [isOpenFiltersContainer]);

  // search input get/clear value

  const [inputSeacrhValue, setInputSeacrhValue] = useState("");

  const handleChangehValueSeacrhInput = useCallback((event) => {
    setInputSeacrhValue(event.target.value);
  }, []);

  const handleResetValue = useCallback(() => {
    setInputSeacrhValue("");
  }, []);

  // date filter get/clear value

  const [inputFromDateValue, setInputFromDateValue] = useState("");
  const [inputToDateValue, setInputToDateValue] = useState("");

  const handleChangehValueFromDateInput = useCallback((event) => {
    setInputFromDateValue(event.target.value);
  }, []);

  const handleChangehValueToDateInput = useCallback((event) => {
    setInputToDateValue(event.target.value);
  }, []);

  const handleResetValueFromDateInput = useCallback(() => {
    setInputFromDateValue("");
  }, []);
  const handleResetValueToDateInput = useCallback(() => {
    setInputToDateValue("");
  }, []);

  // status filter dropdown open

  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);

  const handlOpenDropdownStatusClick = useCallback(() => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  }, [isOpenDropdownStatus]);

  // status filter get value

  const [inputStatusValue, setInputStatusValue] = useState({
    new: false,
    calculation: false,
    confirmed: false,
    postponed: false,
    completed: false,
    cancelled: false,
  });

  const handleChangeStatusValues = useCallback(
    (item) => {
      setInputStatusValue({
        ...inputStatusValue,
        [item]: !inputStatusValue[item],
      });
    },
    [inputStatusValue]
  );

  const checkedStatuses = useMemo(() => {
    const statuses = Object.keys(inputStatusValue)
      .filter((status) => inputStatusValue[status])
      .map((status) => FILTER_STATUSES[status]);
    return statuses.length ? statuses.join(", ") : FILTER_STATUSES.any;
  }, [inputStatusValue]);

  const statuses = Object.entries(inputStatusValue);

  // sum filter get/clear value

  const [inputFromSumValue, setInputFromSumValue] = useState("");
  const [inputToSumValue, setInputToSumValue] = useState("");

  const handleChangehValueFromSumInput = useCallback((event) => {
    setInputFromSumValue(event.target.value);
  }, []);

  const handleChangehValueToSumInput = useCallback((event) => {
    setInputToSumValue(event.target.value);
  }, []);

  const handleResetValueFromSumInput = useCallback(() => {
    setInputFromSumValue("");
  }, []);
  const handleResetValueToSumInput = useCallback(() => {
    setInputToSumValue("");
  }, []);

  // clear all filters value

  const handleResetAllFilters = () => {
    setInputFromDateValue("");
    setInputToDateValue("");
    setInputStatusValue({
      new: false,
      calculation: false,
      confirmed: false,
      postponed: false,
      completed: false,
      canceled: false,
    });
    setInputFromSumValue("");
    setInputToSumValue("");
  };

  const value = useMemo(
    () => ({
      filtersDropdown: {
        isOpen: isOpenFiltersContainer,
        onClick: handleOpenFiltersContainer,
      },

      searchInput: {
        value: inputSeacrhValue,
        onChange: handleChangehValueSeacrhInput,
        onReset: handleResetValue,
      },

      dateFilter: {
        valueFromDate: inputFromDateValue,
        valueToDate: inputToDateValue,
        onChangeFromDate: handleChangehValueFromDateInput,
        onChangeToDate: handleChangehValueToDateInput,
        onResetFromDate: handleResetValueFromDateInput,
        onResetToDate: handleResetValueToDateInput,
      },

      statusfilterDropdown: {
        isOpen: isOpenDropdownStatus,
        onClick: handlOpenDropdownStatusClick,
      },

      statusFilter: {
        status: statuses,
        valueInput: checkedStatuses,
        onChange: handleChangeStatusValues,
      },

      sumFilter: {
        valueFromSum: inputFromSumValue,
        valueToSum: inputToSumValue,
        onChangeFromSum: handleChangehValueFromSumInput,
        onChangeToSum: handleChangehValueToSumInput,
        onResetFromSum: handleResetValueFromSumInput,
        onResetToSum: handleResetValueToSumInput,
      },

      resetAllFilters: {
        onClick: handleResetAllFilters,
      },
    }),
    [
      handleOpenFiltersContainer,
      handleChangehValueSeacrhInput,
      handleResetValue,
      handleChangehValueFromDateInput,
      handleChangehValueToDateInput,
      handleResetValueFromDateInput,
      handleResetValueToDateInput,
      handlOpenDropdownStatusClick,
      handleChangeStatusValues,
      handleChangehValueFromSumInput,
      handleChangehValueToSumInput,
      handleResetValueFromSumInput,
      handleResetValueToSumInput,
      checkedStatuses,
      inputSeacrhValue,
      inputFromDateValue,
      inputToDateValue,
      isOpenDropdownStatus,
      inputFromSumValue,
      inputToSumValue,
      isOpenFiltersContainer,
      statuses,
    ]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};