import classnames from "classnames";
import styles from "./FilterDate.module.css";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";

export const FilterDate = ({
  inputStartDateValue,
  inputEndDateValue,
  onChangeInputStartDateValue,
  onChangeInputEndDateValue,
  onClearInputStartDateValue,
  onClearInputEndDateValue,
}) => (
  <div className={classnames(styles.content)}>
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
              onClick={onClearInputStartDateValue}
            />
          }
          value={inputStartDateValue}
          onChange={onChangeInputStartDateValue}
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
          onClick={onClearInputEndDateValue}
        />
      }
      value={inputEndDateValue}
      onChange={onChangeInputEndDateValue}
    />
  </div>
);
