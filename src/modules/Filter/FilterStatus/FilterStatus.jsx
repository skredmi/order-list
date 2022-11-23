import { useState } from "react";
import styles from "./FilterStatus.module.css";
import { Input } from "../../../shared/Input/Input";
import { Button } from "../../../shared/Button/Button";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../../shared/Checkbox/Checkbox";
import { LabelInput } from "../../../shared/LabelInput/LabelInput";
import { LabelControl } from "../../../shared/LabelControl/LabelControl";
import {
  FILTER_STATUSES as statuses,
  ANY_STATUS as any,
  BUTTON_THEME as buttonThemeTypes,
} from "../../../constants/constants";

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

  const inputStatusValue =
    !filters.status.length ||
    filters.status.length === Object.keys(statuses).length
      ? any
      : filters.status.map((value) => statuses[value]).join(", ");

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
                theme={buttonThemeTypes.transparent}
                onClick={handlOpenDropdownStatusClick}
                className={styles.iconDropdown}
              />
            }
            onClick={handlOpenDropdownStatusClick}
            value={inputStatusValue}
          />
        }
      />
      {isOpenDropdownStatus && (
        <Dropdown className={styles.dropdown}>
          {Object.keys(statuses).map((key) => (
            <LabelControl
              key={key}
              control={
                <Checkbox
                  value={key}
                  checked={filters.status.includes(key)}
                  onChange={handleChangeStatusValues}
                />
              }
              label={statuses[key]}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
};
