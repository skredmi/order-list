import styles from "./FilterSum.module.css";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import { LabelInput } from "../../shared/LabelInput/LabelInput";

export const FilterSum = ({ onChange, onReset, value }) => {
  const handleOnReset = (key) => () => onReset(key);
  const handleOnChange = (key, event) => onChange(key)(event);

  return (
    <div className={styles.content}>
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
                onClick={handleOnReset("fromSum")}
              />
            }
            value={value("fromSum")}
            onChange={(event) => handleOnChange("fromSum", event)}
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
            onClick={handleOnReset("toSum")}
          />
        }
        value={value("toSum")}
        onChange={(event) => handleOnChange("toSum", event)}
      />
    </div>
  );
};
