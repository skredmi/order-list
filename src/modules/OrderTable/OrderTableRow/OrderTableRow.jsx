import styles from "./OrderTableRow.module.css";
import { Checkbox } from "../../../shared/Checkbox/Checkbox";
import { TableCell } from "../../../shared/TableCell/TableCell";
import { TableStatusCell } from "../TableStatusCell/TableStatusCell";
import { TableRow } from "../../../shared/TableRow/TableRow";

export const OrderTableRow = ({
  item: { date, status, count, name, numberOrder, sum, id },
  onChange,
  checked,
  onClick,
}) => (
  <TableRow onClick={onClick} checked={checked} className={styles.row}>
    <TableCell className={styles.rowCheckbox}>
      <Checkbox onChange={onChange} checked={checked} id={id} />
    </TableCell>
    <TableCell className={styles.rowNumberOrder}> {numberOrder} </TableCell>
    <TableCell className={styles.rowDate}> {date} </TableCell>
    <TableStatusCell status={status} />
    <TableCell className={styles.rowCount}>{count}</TableCell>
    <TableCell className={styles.rowSum}>
      {`${sum.toLocaleString("ru-RU")} ₽ `}
    </TableCell>
    <TableCell className={styles.rowConsumer}> {name}</TableCell>
  </TableRow>
);
