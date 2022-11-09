import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterStatus.module.css";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import { LabelControl } from "../../shared/LabelControl/LabelControl";
import { getStatusValues } from "../../store/slices/filters/filterSelector";
import { changeStatusValue } from "../../store/slices/filters/filterSlice";

export const FILTER_STATUSES = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  cancelled: "Отменен",
};

const ANY_STATUS = {
  any: "Любой",
};

export const FilterStatus = () => {
  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  const dispatch = useDispatch();
  const statusValues = useSelector(getStatusValues);

  const handleChangeStatusValues = (item) => dispatch(changeStatusValue(item));

  const checkedStatuses = () => {
    const statuses = statusValues.map((status) => FILTER_STATUSES[status]);
    const inputValues =
      !statuses.length ||
      statuses.length === Object.keys(FILTER_STATUSES).length
        ? ANY_STATUS.any
        : statuses.join(", ");
    return inputValues;
  };

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
          {Object.keys(FILTER_STATUSES).map((key) => (
            <LabelControl
              key={key}
              control={
                <Checkbox
                  value={key}
                  checked={statusValues.includes(key)}
                  onChange={() => handleChangeStatusValues(key)}
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
