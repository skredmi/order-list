import { useContext, useState } from "react";
import classnames from "classnames";
import styles from "./FilterStatus.module.css";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { LabelControl } from "../../../../shared/LabelControl/LabelControl";
import {
  FilterContext,
  FILTER_STATUSES,
} from "../../../../context/FilterContext/FilterContext";

export const FilterStatus = () => {
  const { statusFilter } = useContext(FilterContext);

  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  return (
    <div className={classnames(styles.content)}>
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
            value={statusFilter.valueInput}
          />
        }
      />
      {isOpenDropdownStatus && (
        <Dropdown className={styles.dropdown}>
          {statusFilter.status.map((item) => (
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
