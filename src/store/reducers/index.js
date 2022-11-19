import { combineReducers } from "redux";
import filters from "../slices/filters/filterSlice";
import orders from "../slices/orders/orderSlice";

const reducers = combineReducers({ filters, orders });

export default reducers;
