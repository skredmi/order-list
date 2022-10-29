import { useContext } from "react";
import classnames from "classnames";
import styles from "./FilterSum.module.css";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { FilterContext } from "../../../../context/FilterContext/FilterContext";

export const FilterSum = () => {
  const { sumFilter } = useContext(FilterContext);
  return (
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
                onClick={sumFilter.onResetFromSum}
              />
            }
            value={sumFilter.valueFromSum}
            onChange={sumFilter.onChangeFromSum}
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
            onClick={sumFilter.onResetToSum}
          />
        }
        value={sumFilter.valueToSum}
        onChange={sumFilter.onChangeToSum}
      />
    </div>
  );
};
