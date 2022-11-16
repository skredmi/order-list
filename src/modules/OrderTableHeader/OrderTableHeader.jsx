import { useDispatch, useSelector } from "react-redux";
import styles from "./OrderTableHeader.module.css";
import { TableHeader } from "../../shared/TableHeader/TableHeader";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { TableHeaderCell } from "../../shared/TableHeaderCell/TableHeaderCell";
import {
  getSortCell,
  getSortDirection,
  getSelectedOrders,
} from "../../store/slices/filters/filterSelector";
import {
  setSortCell,
  setSortDirection,
  selectOrder,
  deselectOrder,
  resetSelectedOrders,
} from "../../store/slices/filters/filterSlice";
import { getPaginetedOrders } from "../../store/slices/orders/ordersSelector";

export const OrderTableHeader = () => {
  const dispatch = useDispatch();
  const sortCell = useSelector(getSortCell);
  const sortDirection = useSelector(getSortDirection);
  const selectedOrders = useSelector(getSelectedOrders);
  const orders = useSelector(getPaginetedOrders);

  const handleSortCellClick = (cell) => {
    if (sortCell === cell) {
      dispatch(resetSelectedOrders());
      dispatch(setSortDirection(!sortDirection));
    } else {
      dispatch(resetSelectedOrders());
      dispatch(setSortCell(cell));
      dispatch(setSortDirection(true));
    }
  };

  const handleChangeSelectedOrders = ({ target: { checked } }) => {
    for (const order of orders) {
      const { id } = order;
      if (!selectedOrders.includes(id)) {
        dispatch(selectOrder({ id }));
      } else if (!checked) {
        dispatch(deselectOrder({ id }));
      }
    }
  };

  return (
    <TableHeader>
      <TableHeaderCell className={styles.tableHeaderCheckbox}>
        <Checkbox
          onChange={(event) => handleChangeSelectedOrders(event)}
          checked={selectedOrders.length === orders.length}
        />
      </TableHeaderCell>
      <TableHeaderCell className={styles.tableHeaderNumberOrder}>
        #
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.tableHeaderDate}
        isActive={sortCell === "date"}
        direction={sortDirection === false}
        hasIcon
        onClick={() => handleSortCellClick("date")}
      >
        Дата
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.tableHeaderStatus}
        isActive={sortCell === "status"}
        direction={sortDirection === false}
        hasIcon
        onClick={() => handleSortCellClick("status")}
      >
        Статус
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.tableHeaderCount}
        isActive={sortCell === "count"}
        direction={sortDirection === false}
        hasIcon
        onClick={() => handleSortCellClick("count")}
      >
        Позиций
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.tableHeaderSum}
        isActive={sortCell === "sum"}
        direction={sortDirection === false}
        hasIcon
        onClick={() => handleSortCellClick("sum")}
      >
        Cумма
      </TableHeaderCell>
      <TableHeaderCell className={styles.tableHeaderConsumer}>
        ФИО покупателя
      </TableHeaderCell>
    </TableHeader>
  );
};
