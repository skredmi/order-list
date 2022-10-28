import classnames from "classnames";
import styles from "./FilterStatus.module.css";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { LabelControl } from "../../../../shared/LabelControl/LabelControl";

export const FilterStatus = ({
  isOpenDropdownStatus,
  handlOpenDropdownStatusClick,
}) => (
  <div className={classnames(styles.content)}>
    <LabelInput
      label="Статус заказа"
      control={
        <Input
          readOnly
          onClick={handlOpenDropdownStatusClick}
          postfix={
            <Button
              nameIcon="vArrow"
              theme="transparent"
              onClick={handlOpenDropdownStatusClick}
              className={styles.iconDropdown}
            />
          }
        />
      }
    />
    {isOpenDropdownStatus && (
      <Dropdown className={styles.dropdown}>
        <LabelControl control={<Checkbox />} label="Новый" />
        <LabelControl control={<Checkbox />} label="Рассчет" />
        <LabelControl control={<Checkbox />} label="Подтвержден" />
        <LabelControl control={<Checkbox />} label="Отложен" />
        <LabelControl control={<Checkbox />} label="Выполнен" />
        <LabelControl control={<Checkbox />} label="Отменен" />
      </Dropdown>
    )}
  </div>
);
