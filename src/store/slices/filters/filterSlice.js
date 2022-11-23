import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  search: "",
  fromDate: "",
  toDate: "",
  status: [],
  fromSum: "",
  toSum: "",
  sortCell: "date",
  isSortAscending: true,
  page: 1,
  selectedOrders: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchFilter(state, action) {
      state.search = action.payload;
    },
    setFilter(state, { payload }) {
      state.fromDate = payload.fromDate;
      state.toDate = payload.toDate;
      state.status = payload.status;
      state.fromSum = payload.fromSum;
      state.toSum = payload.toSum;
    },
    resetFilters() {
      return initialState;
    },
    setSortCell(state, action) {
      state.sortCell = action.payload;
    },
    setSortDirection(state, action) {
      state.isSortAscending = action.payload;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    selectOrder(state, { payload }) {
      state.selectedOrders.push(payload.id);
    },
    deselectOrder(state, { payload }) {
      state.selectedOrders = state.selectedOrders.filter(
        (i) => i !== payload.id
      );
    },
    resetSelectedOrders(state) {
      state.selectedOrders = [];
    },
  },
});

export const {
  setSearchFilter,
  setFilter,
  resetFilters,
  setSortCell,
  setSortDirection,
  setCurrentPage,
  selectOrder,
  deselectOrder,
  resetSelectedOrders,
} = filterSlice.actions;
export default filterSlice.reducer;
