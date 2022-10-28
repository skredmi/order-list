import classnames from "classnames";
import styles from "./TableHeader.module.css";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { TableHeaderCell } from "../TableHeaderCell/TableHeaderCell";

export const TableHeader = () => (
  <section className={classnames(styles.tableHeader)}>
    <div className={styles.tableHeaderCheckbox}>
      <Checkbox />
    </div>
    <TableHeaderCell title="#" className={styles.tableHeaderNumberOrder} />
    <TableHeaderCell
      title="Дата"
      nameIcon="vArrow"
      className={styles.tableHeaderDate}
    />
    <TableHeaderCell
      title="Статус"
      nameIcon="vArrow"
      className={styles.tableHeaderStatus}
    />
    <TableHeaderCell
      title="Позиций"
      nameIcon="vArrow"
      className={styles.tableHeaderCount}
    />
    <TableHeaderCell
      title="Cумма"
      nameIcon="vArrow"
      className={styles.tableHeaderSum}
    />
    <TableHeaderCell
      title="ФИО покупателя"
      className={styles.tableHeaderConsumer}
    />
  </section>
);
