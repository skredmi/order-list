import classnames from "classnames";
import styles from "./TableStatusCell.module.css";
import { Icon } from "../../../shared/Icon/Icon";
import { TableCell } from "../../../shared/TableCell/TableCell";
import {
  STATUS_MAP as statusMap,
  STATUS_TYPES as statusTypes,
} from "../../../constants/constants";

export const TableStatusCell = ({ status }) => {
  const blockIconClass = classnames({
    [styles.itemIconNew]: status === statusTypes.new,
    [styles.itemIconCalculation]: status === statusTypes.calculation,
    [styles.itemIconConfirmed]: status === statusTypes.confirmed,
    [styles.itemIconPostponed]: status === statusTypes.postponed,
    [styles.itemIconCompleted]: status === statusTypes.completed,
    [styles.itemIconCancelled]: status === statusTypes.cancelled,
  });

  const blockStatusClass = classnames(styles.rowStatus, {
    [styles.rowStatusCompleted]: status === statusTypes.completed,
    [styles.rowStatusCancelled]: status === statusTypes.cancelled,
  });

  return (
    <TableCell className={blockStatusClass}>
      <Icon nameIcon={statusMap[status].iconName} className={blockIconClass} />
      {statusMap[status].status}
    </TableCell>
  );
};
