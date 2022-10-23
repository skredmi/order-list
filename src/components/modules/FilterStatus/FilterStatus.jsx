import classnames from "classnames";
import styles from "./FilterStatus.module.css";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../shared/Checkbox/Checkbox";

export const FilterStatus = ({
  isOpenDropdownStatus,
  handlOpenDropdownStatusClick,
  className
}) => {
  const blockClass = classnames(styles.content, {
    [className]: !!className
  });
  return (
    <div className={blockClass}>
      <Input
        label="Статус заказа"
        placeholder="Любой"
        inputStyle="filter"
        onClick={handlOpenDropdownStatusClick}
      >
        <Button className={styles.button} />
      </Input>
      {isOpenDropdownStatus && (
        <Dropdown dropdownStyle="list" className={styles.item}>
          <Checkbox text="Новый" />
          <Checkbox text="Рассчет" />
          <Checkbox text="Подтвержден" />
          <Checkbox text="Отложен" />
          <Checkbox text="Выполнен" />
          <Checkbox text="Отменен" />
        </Dropdown>
      )}
    </div>
  );
};
