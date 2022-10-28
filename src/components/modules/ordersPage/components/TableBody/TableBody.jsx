import classnames from "classnames";
import styles from "./TableBody.module.css";
import { TableRow } from "../TableRow/TableRow";

export const TableBody = () => (
  <div className={classnames(styles.container)}>
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
  </div>
);
