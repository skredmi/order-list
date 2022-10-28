import classnames from "classnames";
import styles from "./TableHeaderCell.module.css";
import { Icon } from "../../../../shared/Icon/Icon";

export const TableHeaderCell = ({ title, nameIcon, className }) => (
  <div className={classnames(styles.cell, className)}>
    {title} {Icon && <Icon nameIcon={nameIcon} className={styles.cellIcon} />}
  </div>
);
