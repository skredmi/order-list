import classnames from "classnames";
import styles from "./TableRow.module.css";

export const TableRow = ({ children, className, onClick, checked }) => (
  <div
    className={classnames(styles.row, className, { [styles.checked]: checked })}
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-hidden="true"
  >
    {children}
  </div>
);
