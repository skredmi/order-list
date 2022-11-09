import classnames from "classnames";
import styles from "./TableHeader.module.css";

export const TableHeader = ({ children, className }) => (
  <div className={classnames(styles.tableHeader, className)}>{children}</div>
);
