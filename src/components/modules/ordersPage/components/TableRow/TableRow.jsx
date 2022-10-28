import classnames from "classnames";
import styles from "./TableRow.module.css";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { Icon } from "../../../../shared/Icon/Icon";

export const TableRow = () => (
  <div className={classnames(styles.row)}>
    <div className={styles.rowCheckbox}>
      <Checkbox />
    </div>
    <div className={styles.rowNumberOrder}>1234567</div>
    <div className={styles.rowDate}>15.02.2021, 18:00</div>
    <div className={styles.rowStatus}>
      <Icon nameIcon="vArrow" className={styles.rowIcon} />
      Выполнен
    </div>
    <div className={styles.rowCount}>5</div>
    <div className={styles.rowSum}>101 907 ₽</div>
    <div className={styles.rowConsumer}>Чернышев Филипп Семёнович</div>
  </div>
);
