import { useContext } from "react";
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
  const { statusfilterDropdown, statusFilter } = useContext(FilterContext);

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
                onClick={statusfilterDropdown.onClick}
                className={styles.iconDropdown}
              />
            }
            onClick={statusfilterDropdown.onClick}
            value={statusFilter.valueInput}
          />
        }
      />
      {statusfilterDropdown.isOpen && (
        <Dropdown className={styles.dropdown}>
          {statusFilter.status.map((el) => (
            <LabelControl
              key={el}
              control={
                <Checkbox
                  checked={el[1]}
                  onChange={() => statusFilter.onChange(el[0])}
                />
              }
              label={FILTER_STATUSES[el[0]]}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
};
