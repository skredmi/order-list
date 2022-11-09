/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  fromDatevalue: "",
  toDateValue: "",
  statusValue: [],
  fromSumValue: "",
  toSumValue: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeSearchValue(state, action) {
      state.searchValue = action.payload.value;
    },
    resetSearchValue(state) {
      state.searchValue = "";
    },
    changeFromDateValue(state, action) {
      state.fromDatevalue = action.payload.value;
    },
    resetFromDateValue(state) {
      state.fromDatevalue = "";
    },
    changeToDateValue(state, action) {
      state.toDateValue = action.payload.value;
    },
    resetToDateValue(state) {
      state.toDateValue = "";
    },
    changeStatusValue(state, action) {
      state.statusValue = state.statusValue.includes(action.payload)
        ? state.statusValue.filter((item) => item !== action.payload)
        : [...state.statusValue, action.payload];
    },
    changeFromSumValue(state, action) {
      state.fromSumValue = action.payload.value;
    },
    resetFromSumValue(state) {
      state.fromSumValue = "";
    },
    changeToSumValue(state, action) {
      state.toSumValue = action.payload.value;
    },
    resetToSumValue(state) {
      state.toSumValue = "";
    },
    resetAllValue(state) {
      state.fromDatevalue = "";
      state.toDateValue = "";
      state.statusValue = [];
      state.fromSumValue = "";
      state.toSumValue = "";
    },
  },
});

export const {
  changeSearchValue,
  resetSearchValue,
  changeFromDateValue,
  resetFromDateValue,
  changeToDateValue,
  resetToDateValue,
  changeStatusValue,
  changeFromSumValue,
  resetFromSumValue,
  changeToSumValue,
  resetToSumValue,
  resetAllValue,
} = filterSlice.actions;
export default filterSlice.reducer;
