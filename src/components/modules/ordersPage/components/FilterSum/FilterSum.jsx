import classnames from "classnames";
import styles from "./FilterSum.module.css";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";

export const FilterSum = ({
  inputFromSumValue,
  inputToSumValue,
  onChangehValueFromSumInput,
  onChangehValueToSumInput,
  onClearValueFromSumInput,
  onClearValueToSumInput,
}) => (
  <div className={classnames(styles.content)}>
    <LabelInput
      label="Сумма заказа"
      control={
        <Input
          placeholder="₽"
          prefix="от"
          postfix={
            <Button
              nameIcon="xMedium"
              theme="transparent"
              className={styles.iconDelete}
              onClick={onClearValueFromSumInput}
            />
          }
          value={inputFromSumValue}
          onChange={onChangehValueFromSumInput}
        />
      }
    />
    <Input
      placeholder="₽"
      prefix="до"
      postfix={
        <Button
          nameIcon="xMedium"
          theme="transparent"
          className={styles.iconDelete}
          onClick={onClearValueToSumInput}
        />
      }
      value={inputToSumValue}
      onChange={onChangehValueToSumInput}
    />
  </div>
);
