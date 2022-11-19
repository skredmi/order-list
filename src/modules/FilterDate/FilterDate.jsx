import styles from "./FilterDate.module.css";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";

export const FilterDate = ({ onChange, onReset, value }) => {
  const handleOnReset = (key) => () => onReset(key);
  const handleOnChange = (key, event) => onChange(key)(event);

  return (
    <div className={styles.content}>
      <LabelInput
        label="Дата оформления"
        control={
          <Input
            placeholder="dd.mm.yyyy"
            prefix="c"
            postfix={
              <Button
                nameIcon="xMedium"
                theme="transparent"
                className={styles.iconDelete}
                onClick={handleOnReset("fromDate")}
              />
            }
            value={value("fromDate")}
            onChange={(event) => handleOnChange("fromDate", event)}
            className={styles.datePrefix}
          />
        }
      />
      <Input
        placeholder="dd.mm.yyyy"
        prefix="по"
        postfix={
          <Button
            nameIcon="xMedium"
            theme="transparent"
            className={styles.iconDelete}
            onClick={handleOnReset("toDate")}
          />
        }
        value={value("toDate")}
        onChange={(event) => handleOnChange("toDate", event)}
      />
    </div>
  );
};
