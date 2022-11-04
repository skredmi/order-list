/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchValue: "", fromDatevalue: "", toDateValue: "" };

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
    resetAllValue(state) {
      state.fromDatevalue = "";
      state.toDateValue = "";
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
  resetAllValue,
} = filterSlice.actions;
export default filterSlice.reducer;
