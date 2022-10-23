import classnames from "classnames";
import styles from "./FilterSum.module.css";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";

export const FilterSum = ({
  className,
  inputFromSumValue,
  inputToSumValue,
  onChangehValueFromSumInput,
  onChangehValueToSumInput,
  onClearValueFromSumInput,
  onClearValueToSumInput
}) => {
  const blockClass = classnames(styles.content, {
    [className]: !!className
  });
  return (
    <div className={blockClass}>
      <Input
        label="Сумма заказа"
        placeholder="₽"
        prefix="от"
        value={inputFromSumValue}
        onChange={onChangehValueFromSumInput}
        onClick={onClearValueFromSumInput}
      >
        {inputFromSumValue && (
          <Button
            className={styles.button}
            nameIcon="x-medium"
            theme="delete"
          />
        )}
      </Input>
      <Input
        placeholder="₽"
        prefix="до"
        value={inputToSumValue}
        onChange={onChangehValueToSumInput}
        onClick={onClearValueToSumInput}
      >
        {inputToSumValue && (
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
