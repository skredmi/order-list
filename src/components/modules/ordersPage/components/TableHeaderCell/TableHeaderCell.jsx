import classnames from "classnames";
import styles from "./TableHeaderCell.module.css";
/* import { Icon } from "../../../../shared/Icon/Icon"; */
import { Button } from "../../../../shared/Button/Button";

export const TableHeaderCell = ({ title, nameIcon, className }) => (
  <div className={classnames(styles.cell, className)}>
    {title}
    {Button && (
      <Button
        theme="transparent"
        size="small"
        nameIcon={nameIcon}
        className={styles.cellIcon}
      />
    )}
  </div>
);
