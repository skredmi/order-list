import styles from "./OrderTableHeader.module.css";
import { TableHeader } from "../../shared/TableHeader/TableHeader";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { TableHeaderCell } from "../../shared/TableHeaderCell/TableHeaderCell";

export const OrderTableHeader = () => (
  <TableHeader>
    <div className={styles.tableHeaderCheckbox}>
      <Checkbox />
    </div>
    <TableHeaderCell className={styles.tableHeaderNumberOrder}>
      #
    </TableHeaderCell>
    <TableHeaderCell className={styles.tableHeaderDate} hasIcon>
      Дата
    </TableHeaderCell>
    <TableHeaderCell className={styles.tableHeaderStatus} hasIcon>
      Статус
    </TableHeaderCell>
    <TableHeaderCell className={styles.tableHeaderCount} hasIcon>
      Позиций
    </TableHeaderCell>
    <TableHeaderCell className={styles.tableHeaderSum} hasIcon>
      Cумма
    </TableHeaderCell>
    <TableHeaderCell className={styles.tableHeaderConsumer}>
      ФИО покупателя
    </TableHeaderCell>
  </TableHeader>
);
