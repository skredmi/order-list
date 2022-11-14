import { createSlice } from "@reduxjs/toolkit";
import { mock } from "../../../mock/mock";

const initialState = mock;

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export default ordersSlice.reducer;
