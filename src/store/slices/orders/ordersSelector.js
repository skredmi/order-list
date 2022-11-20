import { createSelector } from "@reduxjs/toolkit";

import {
  getSearchValue,
  getFromDateValue,
  getToDateValue,
  getStatusValues,
  getFromSumValue,
  getToSumValue,
  getSortCell,
  getSortDirection,
  getPage,
} from "../filters/filterSelector";
import { PAGE_SIZE as pageSize } from "../../../constants/constants";

export const getOrdersData = (state) => state.orders.mock;

const isDateInRange = (dateFrom, dateTo) => (date) => {
  if (!dateFrom && !dateTo) {
    return true;
  }

  if (!dateFrom) {
    return date <= dateTo;
  }

  if (!dateTo) {
    return date >= dateFrom;
  }
  return date >= dateFrom && date <= dateTo;
};

const isNumberInRange = (min, max) => (number) => {
  const minNumber = min || Number.MIN_SAFE_INTEGER;
  const maxNumber = max || Number.MAX_SAFE_INTEGER;

  return number >= minNumber && number <= maxNumber;
};

const isSubstring = (search) => (name, numberOrder) =>
  name.toLowerCase().includes(search.toLowerCase()) ||
  String(numberOrder).startsWith(search, 0);

const isItemInArray = (array) => (item) => {
  if (!array.length) return true;
  return array.includes(item);
};

export const parseDate = (date) => {
  if (!date) return null;
  const [d, m, y] = date.slice(0, 10).split(".");
  return Date.parse(`${y}-${m}-${d}`);
};

export const getFilteredOrders = (state) => {
  const orders = getOrdersData(state);
  const searchFilter = isSubstring(getSearchValue(state));
  const sumFilter = isNumberInRange(
    getFromSumValue(state),
    getToSumValue(state)
  );
  const statusFilter = isItemInArray(getStatusValues(state));
  const dateFilter = isDateInRange(
    parseDate(getFromDateValue(state)),
    parseDate(getToDateValue(state))
  );
  const areAllTruthly = (arr) => arr.every(Boolean);

  return orders.filter(({ sum, date, status, name, numberOrder }) =>
    areAllTruthly([
      sumFilter(sum),
      dateFilter(parseDate(date)),
      statusFilter(status),
      searchFilter(name, numberOrder),
    ])
  );
};

const dateSort = (direction) => (from, to) => {
  const fromDate = parseDate(from.date);
  const toDate = parseDate(to.date);
  return (fromDate - toDate) * direction;
};

const statusSort = (direction) => (from, to) =>
  from.status.localeCompare(to.status) * direction;

const countSort = (direction) => (from, to) =>
  (from.count - to.count) * direction;

const sumSort = (direction) => (from, to) => (from.sum - to.sum) * direction;

const SORT_MAP = {
  date: dateSort,
  status: statusSort,
  count: countSort,
  sum: sumSort,
};

export const getSortedOrders = (state) => {
  const filteredOrders = getFilteredOrders(state);
  const comparator = SORT_MAP[getSortCell(state)];
  return filteredOrders.sort(comparator(getSortDirection(state) ? -1 : 1));
};

export const getPaginetedOrders = createSelector(
  [getSortedOrders, getPage],
  (sortedOrders, page) => {
    const start = pageSize * (page - 1);
    const end = start + pageSize;
    return sortedOrders.slice(start, end);
  }
);
