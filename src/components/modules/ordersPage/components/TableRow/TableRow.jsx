import classnames from "classnames";
import styles from "./TableRow.module.css";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { TableCell } from "../TableCell/TableCell";

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

export const TableRow = ({
  item: { date, status, count, name, numberOrder, sum },
}) => {
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
    <div className={classnames(styles.row)}>
      <div className={styles.rowCheckbox}>
        <Checkbox />
      </div>
      <TableCell title={numberOrder} className={styles.rowNumberOrder} />
      <TableCell title={date} className={styles.rowDate} />
      <TableCell
        title={STATUS_MAP[status].status}
        nameIcon={STATUS_MAP[status].iconName}
        className={blockStatusClass}
        iconStyle={blockIconClass}
      />
      <TableCell
        title={status === "Отменен" ? "-" : count}
        className={styles.rowCount}
      />
      <TableCell
        title={status === "Отменен" ? "-" : `${sum.toLocaleString("ru-RU")} ₽ `}
        className={styles.rowSum}
      />
      <TableCell title={name} className={styles.rowConsumer} />
    </div>
  );
};
