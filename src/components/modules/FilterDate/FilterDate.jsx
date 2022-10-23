import classnames from "classnames";
import styles from "./FilterDate.module.css";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";

export const FilterDate = ({
  className,
  inputStartDateValue,
  inputEndDateValue,
  onChangeInputStartDateValue,
  onChangeInputEndDateValue,
  onClearInputStartDateValue,
  onClearInputEndDateValue
}) => {
  const blockClass = classnames(styles.content, {
    [className]: !!className
  });
  return (
    <div className={blockClass}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix="c"
        value={inputStartDateValue}
        onChange={onChangeInputStartDateValue}
        onClick={onClearInputStartDateValue}
      >
        {inputStartDateValue && (
          <Button
            className={styles.button}
            nameIcon="x-medium"
            theme="delete"
          />
        )}
      </Input>
      <Input
        placeholder="dd.mm.yyyy"
        prefix="по"
        value={inputEndDateValue}
        onChange={onChangeInputEndDateValue}
        onClick={onClearInputEndDateValue}
      >
        {onClearInputEndDateValue && (
          <Button
            className={styles.button}
            nameIcon="x-medium"
            theme="delete"
          />
        )}
      </Input>
    </div>
  );
};
