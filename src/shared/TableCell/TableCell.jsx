import classnames from "classnames";
import styles from "./TableCell.module.css";

export const TableCell = ({ children, className }) => (
  <div className={classnames(styles.item, className)}>{children}</div>
);
