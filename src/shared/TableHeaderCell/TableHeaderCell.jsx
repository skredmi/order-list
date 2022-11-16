import classnames from "classnames";
import styles from "./TableHeaderCell.module.css";
import { Icon } from "../Icon/Icon";

export const TableHeaderCell = ({
  children,
  isActive,
  hasIcon,
  direction,
  className,
  onClick,
}) => {
  const blockClass = classnames(styles.cell, className, {
    [styles.cellActive]: isActive,
  });

  const iconClass = classnames(styles.cellIcon, {
    [styles.cellIconReverse]: isActive && direction,
  });

  return (
    <div
      className={blockClass}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      {children}
      {hasIcon && <Icon nameIcon="vArrow" className={iconClass} />}
    </div>
  );
};
