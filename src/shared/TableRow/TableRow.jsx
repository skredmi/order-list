import classnames from "classnames";
import styles from "./TableRow.module.css";

export const TableRow = ({ children, className }) => (
  <div className={classnames(styles.row, className)}>{children}</div>
);
