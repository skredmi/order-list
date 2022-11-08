import classnames from "classnames";
import styles from "./TableBody.module.css";

export const TableBody = ({ children, className }) => (
  <div className={classnames(styles.container, className)}>{children}</div>
);
