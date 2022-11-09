import classnames from "classnames";
import styles from "./TableFooter.module.css";

export const TableFooter = ({ children, className }) => (
  <div className={classnames(styles.tableFooter, className)}>{children}</div>
);
