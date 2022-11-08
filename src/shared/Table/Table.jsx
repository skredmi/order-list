import classnames from "classnames";
import styles from "./Table.module.css";

export const Table = ({ children, className }) => (
  <div className={classnames(styles.table, className)}>{children}</div>
);
