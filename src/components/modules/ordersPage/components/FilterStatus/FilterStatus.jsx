import { useState, useContext } from "react";
import styles from "./FilterStatus.module.css";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { LabelControl } from "../../../../shared/LabelControl/LabelControl";
import { FilterContext } from "../../../../context/FilterContext/FilterContext";

const FILTER_STATUSES = {
  any: "Любой",
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  cancelled: "Отменен",
};

export const FilterStatus = () => {
  const { statusFilter } = useContext(FilterContext);

  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  const checkedStatuses = () => {
    const statuses = Object.keys(statusFilter.value)
      .filter((status) => statusFilter.value[status])
      .map((status) => FILTER_STATUSES[status]);
    const inputValues =
      !statuses.length || statuses.length === 6
        ? FILTER_STATUSES.any
        : statuses.join(", ");
    return inputValues;
  };

  const inputValue = Object.entries(statusFilter.value);

  return (
    <div className={styles.content}>
      <LabelInput
        label="Статус заказа"
        control={
          <Input
            readOnly
            postfix={
              <Button
                nameIcon="vArrow"
                theme="transparent"
                onClick={handlOpenDropdownStatusClick}
                className={styles.iconDropdown}
              />
            }
            onClick={handlOpenDropdownStatusClick}
            value={checkedStatuses()}
          />
        }
      />
      {isOpenDropdownStatus && (
        <Dropdown className={styles.dropdown}>
          {inputValue.map((item) => (
            <LabelControl
              key={item}
              control={
                <Checkbox
                  checked={item[1]}
                  onChange={() => statusFilter.onChange(item[0])}
                />
              }
              label={FILTER_STATUSES[item[0]]}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
};
