import classnames from "classnames";
import styles from "./Table.module.css";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableFooter } from "../TableFooter/TableFooter";
import { TableBody } from "../TableBody/TableBody";

export const Table = () => (
  <section className={classnames(styles.table)}>
    <TableHeader />
    <TableBody />
    <TableFooter />
  </section>
);
