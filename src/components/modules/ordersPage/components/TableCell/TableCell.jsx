import classnames from "classnames";
import styles from "./TableCell.module.css";
import { Icon } from "../../../../shared/Icon/Icon";

export const TableCell = ({ title, nameIcon, iconStyle, className }) => (
  <div className={classnames(styles.item, className)}>
    {Icon && <Icon nameIcon={nameIcon} className={iconStyle} />}
    {title}
  </div>
);
