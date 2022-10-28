import classnames from "classnames";
import styles from "./TableHeader.module.css";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { Icon } from "../../../../shared/Icon/Icon";

export const TableHeader = () => (
  <section className={classnames(styles.tableHeader)}>
    <div className={styles.tableHeaderCheckbox}>
      <Checkbox />
    </div>
    <div className={styles.tableHeaderNumberOrder}>#</div>
    <div className={styles.tableHeaderDate}>
      Дата <Icon nameIcon="vArrow" className={styles.tableHeaderIcon} />
    </div>
    <div className={styles.tableHeaderStatus}>
      Статус <Icon nameIcon="vArrow" className={styles.tableHeaderIcon} />
    </div>
    <div className={styles.tableHeaderCount}>
      Позиций <Icon nameIcon="vArrow" className={styles.tableHeaderIcon} />
    </div>
    <div className={styles.tableHeaderSum}>
      Cумма <Icon nameIcon="vArrow" className={styles.tableHeaderIcon} />
    </div>
    <div className={styles.tableHeaderConsumer}>ФИО покупателя</div>
  </section>
);
