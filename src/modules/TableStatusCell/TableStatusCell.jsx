import classnames from "classnames";
import styles from "./TableStatusCell.module.css";
import { Icon } from "../../shared/Icon/Icon";
import { TableCell } from "../../shared/TableCell/TableCell";

const STATUS_MAP = {
  Новый: {
    status: "Новый",
    iconName: "dot",
    iconColor: "#ff8c56",
  },
  Рассчет: {
    status: "Рассчет",
    iconName: "dot",
    iconColor: "#459df5",
  },
  Подтвержден: {
    status: "Подтвержден",
    iconName: "dot",
    iconColor: "#0fb864",
  },
  Отложен: {
    status: "Отложен",
    iconName: "dot",
    iconColor: "#ff8c56",
  },
  Выполнен: {
    status: "Выполнен",
    iconName: "checkmark",
    iconColor: "#0fb864",
  },
  Отменен: {
    status: "Отменен",
    iconName: "abort",
    iconColor: "#000000",
  },
};

const StatusTypes = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  cancelled: "Отменен",
};

export const TableStatusCell = ({ status }) => {
  const blockIconClass = classnames({
    [styles.itemIconNew]: status === StatusTypes.new,
    [styles.itemIconCalculation]: status === StatusTypes.calculation,
    [styles.itemIconConfirmed]: status === StatusTypes.confirmed,
    [styles.itemIconPostponed]: status === StatusTypes.postponed,
    [styles.itemIconCompleted]: status === StatusTypes.completed,
    [styles.itemIconCancelled]: status === StatusTypes.cancelled,
  });

  const blockStatusClass = classnames(styles.rowStatus, {
    [styles.rowStatusCompleted]: status === StatusTypes.completed,
    [styles.rowStatusCancelled]: status === StatusTypes.cancelled,
  });

  return (
    <TableCell className={blockStatusClass}>
      <Icon nameIcon={STATUS_MAP[status].iconName} className={blockIconClass} />
      {STATUS_MAP[status].status}
    </TableCell>
  );
};
