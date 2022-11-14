import { useState } from "react";
import styles from "./FilterStatus.module.css";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import { LabelControl } from "../../shared/LabelControl/LabelControl";

export const FILTER_STATUSES = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  cancelled: "Отменен",
};

const ANY_STATUS = "Любой";

export const FilterStatus = ({ state }) => {
  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  const [filters, setFilters] = state;

  const handleChangeStatusValues = (event) => {
    setFilters({
      ...filters,
      status: filters.status.includes(event.target.value)
        ? filters.status.filter((item) => item !== event.target.value)
        : [...filters.status, event.target.value],
    });
  };

  const statuses =
    !filters.status.length ||
    filters.status.length === Object.keys(FILTER_STATUSES).length
      ? ANY_STATUS
      : filters.status.map((value) => FILTER_STATUSES[value]).join(", ");

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
            value={statuses}
          />
        }
      />
      {isOpenDropdownStatus && (
        <Dropdown className={styles.dropdown}>
          {Object.keys(FILTER_STATUSES).map((key) => (
            <LabelControl
              key={key}
              control={
                <Checkbox
                  value={key}
                  checked={filters.status.includes(key)}
                  onChange={handleChangeStatusValues}
                />
              }
              label={FILTER_STATUSES[key]}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
};
