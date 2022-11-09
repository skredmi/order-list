import { createSlice } from "@reduxjs/toolkit";
import { orders } from "./orders";

const initialState = orders;

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOders(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { getOders } = ordersSlice.actions;
export default ordersSlice.reducer;
