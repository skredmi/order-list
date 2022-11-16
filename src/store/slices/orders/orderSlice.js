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
    changeOrder(state, { payload: { id, key, value } }) {
      const order = state.mock.find((i) => i.id === id);
      order[key] = value;
    },
  },
});
export const { removeOrder, changeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
