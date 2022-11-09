import classnames from "classnames";
import styles from "./TableStatusCell.module.css";
import { Icon } from "../../shared/Icon/Icon";

const STATUS_MAP = {
  new: {
    status: "Новый",
    iconName: "dot",
    iconColor: "#ff8c56",
  },
  calculation: {
    status: "Рассчет",
    iconName: "dot",
    iconColor: "#459df5",
  },
  confirmed: {
    status: "Подтвержден",
    iconName: "dot",
    iconColor: "#0fb864",
  },
  postponed: {
    status: "Отложен",
    iconName: "dot",
    iconColor: "#ff8c56",
  },
  completed: {
    status: "Выполнен",
    iconName: "checkmark",
    iconColor: "#0fb864",
  },
  cancelled: {
    status: "Отменен",
    iconName: "abort",
    iconColor: "#000000",
  },
};

const StatusTypes = {
  new: "new",
  calculation: "calculation",
  confirmed: "confirmed",
  postponed: "postponed",
  completed: "completed",
  cancelled: "cancelled",
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
    <div className={blockStatusClass}>
      <Icon nameIcon={STATUS_MAP[status].iconName} className={blockIconClass} />
      {STATUS_MAP[status].status}
    </div>
  );
};
