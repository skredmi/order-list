import { useDispatch, useSelector } from "react-redux";
import styles from "./OrderTableHeader.module.css";
import { TableHeader } from "../../shared/TableHeader/TableHeader";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { TableHeaderCell } from "../../shared/TableHeaderCell/TableHeaderCell";
import {
  getSortCell,
  getSortDirection,
} from "../../store/slices/filters/filterSelector";
import {
  setSortCell,
  setSortDirection,
} from "../../store/slices/filters/filterSlice";

export const OrderTableHeader = () => {
  const dispatch = useDispatch();
  const sortCell = useSelector(getSortCell);
  const sortDirection = useSelector(getSortDirection);

  const handleSortCellClick = (cell) => {
    if (sortCell === cell) {
      dispatch(setSortDirection(!sortDirection));
    } else {
      dispatch(setSortCell(cell));
      dispatch(setSortDirection(true));
    }
  };

  return (
    <TableHeader>
      <TableHeaderCell className={styles.tableHeaderCheckbox}>
        <Checkbox />
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
