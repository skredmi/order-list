import { createSlice } from "@reduxjs/toolkit";
import { mock } from "../../../mock/mock";

const initialState = {
  mock,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    removeOrder(state, { payload }) {
      state.mock = state.mock.filter((i) => i.id !== payload.id);
    },
  },
});
export const { removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
