import { createSlice } from "@reduxjs/toolkit";
import { mock } from "../../../mock/mock";

const initialState = {
  mock,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    changeOrder(state, { payload: { id, key, value } }) {
      const order = state.mock.find((i) => i.id === id);
      order[key] = value;
    },
    removeOrder(state, { payload: { ids } }) {
      state.mock = state.mock.filter((i) => !ids.includes(i.id));
    },
  },
});
export const { removeOrder, changeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
