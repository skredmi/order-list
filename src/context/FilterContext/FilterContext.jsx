import { createContext, useMemo, useState, useCallback } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  // search input get/clear value

  const [seacrhValue, setSeacrhValue] = useState("");

  const handleChangehValueSeacrhInput = useCallback((event) => {
    setSeacrhValue(event.target.value);
  }, []);

  const handleResetValue = useCallback(() => {
    setSeacrhValue("");
  }, []);

  // date filter get/clear value

  const [fromDateValue, setFromDateValue] = useState("");
  const [toDateValue, setToDateValue] = useState("");

  const handleChangehValueFromDateInput = useCallback((event) => {
    setFromDateValue(event.target.value);
  }, []);

  const handleChangehValueToDateInput = useCallback((event) => {
    setToDateValue(event.target.value);
  }, []);

  const handleResetValueFromDateInput = useCallback(() => {
    setFromDateValue("");
  }, []);
  const handleResetValueToDateInput = useCallback(() => {
    setToDateValue("");
  }, []);

  // status filter get value

  const [statusValue, setStatusValue] = useState({
    new: false,
    calculation: false,
    confirmed: false,
    postponed: false,
    completed: false,
    cancelled: false,
  });

  const handleChangeStatusValues = useCallback(
    (item) => {
      setStatusValue({
        ...statusValue,
        [item]: !statusValue[item],
      });
    },
    [statusValue]
  );

  // sum filter get/clear value

  const [fromSumValue, setFromSumValue] = useState("");
  const [toSumValue, setToSumValue] = useState("");

  const handleChangehValueFromSumInput = useCallback((event) => {
    setFromSumValue(event.target.value);
  }, []);

  const handleChangehValueToSumInput = useCallback((event) => {
    setToSumValue(event.target.value);
  }, []);

  const handleResetValueFromSumInput = useCallback(() => {
    setFromSumValue("");
  }, []);
  const handleResetValueToSumInput = useCallback(() => {
    setToSumValue("");
  }, []);

  // clear all filters value

  const handleResetAllFilters = () => {
    setFromDateValue("");
    setToDateValue("");
    setStatusValue({
      new: false,
      calculation: false,
      confirmed: false,
      postponed: false,
      completed: false,
      cancelled: false,
    });
    setFromSumValue("");
    setToSumValue("");
  };

  const value = useMemo(
    () => ({
      searchInput: {
        value: seacrhValue,
        onChange: handleChangehValueSeacrhInput,
        onReset: handleResetValue,
      },

      dateFilter: {
        valueFromDate: fromDateValue,
        valueToDate: toDateValue,
        onChangeFromDate: handleChangehValueFromDateInput,
        onChangeToDate: handleChangehValueToDateInput,
        onResetFromDate: handleResetValueFromDateInput,
        onResetToDate: handleResetValueToDateInput,
      },

      statusFilter: {
        value: statusValue,
        onChange: handleChangeStatusValues,
      },

      sumFilter: {
        valueFromSum: fromSumValue,
        valueToSum: toSumValue,
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
      handleChangehValueSeacrhInput,
      handleResetValue,
      handleChangehValueFromDateInput,
      handleChangehValueToDateInput,
      handleResetValueFromDateInput,
      handleResetValueToDateInput,
      handleChangeStatusValues,
      handleChangehValueFromSumInput,
      handleChangehValueToSumInput,
      handleResetValueFromSumInput,
      handleResetValueToSumInput,
      seacrhValue,
      fromDateValue,
      toDateValue,
      fromSumValue,
      toSumValue,
      statusValue,
    ]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
