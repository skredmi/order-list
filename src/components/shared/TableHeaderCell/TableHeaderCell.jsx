import classnames from "classnames";
import styles from "./TableHeaderCell.module.css";
import { Icon } from "../Icon/Icon";

export const TableHeaderCell = ({ children, isActive, hasIcon, className }) => (
  <div
    className={classnames(styles.cell, className, {
      [styles.cellActive]: isActive,
    })}
  >
    {children}
    {hasIcon && <Icon nameIcon="vArrow" className={styles.cellIcon} />}
  </div>
);
