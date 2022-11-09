/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";

export const getOrdersData = (state) => state.orders;

export const getFilteredOrders = (orders) => {
  const {
    searchValue,
    fromDatevalue,
    toDateValue,
    statusValue,
    fromSumValue,
    toSumValue,
  } = useSelector((state) => state.filters);

  let filteredOrders = [...orders];

  if (searchValue) {
    filteredOrders = filteredOrders.filter((order) =>
      order.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (fromDatevalue) {
    filteredOrders = filteredOrders.filter(
      (order) => new Date(order.date) > new Date(fromDatevalue)
    );
  }
  if (toDateValue) {
    filteredOrders = filteredOrders.filter(
      (order) => new Date(order.date) < new Date(toDateValue)
    );
  }
  if (statusValue.length > 0) {
    filteredOrders = filteredOrders.filter((order) =>
      statusValue.includes(order.status)
    );
  }
  if (fromSumValue) {
    filteredOrders = filteredOrders.filter((order) => order.sum > fromSumValue);
  }
  if (toSumValue) {
    filteredOrders = filteredOrders.filter((order) => order.sum < toSumValue);
  }

  return filteredOrders;
};
