import { useContext } from "react";
import classnames from "classnames";
import styles from "./FilterDate.module.css";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { FilterContext } from "../../../../context/FilterContext/FilterContext";

export const FilterDate = () => {
  const { dateFilter } = useContext(FilterContext);

  return (
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
                onClick={dateFilter.onResetFromDate}
              />
            }
            value={dateFilter.valueFromDate}
            onChange={dateFilter.onChangeFromDate}
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
            onClick={dateFilter.onResetToDate}
          />
        }
        value={dateFilter.valueToDate}
        onChange={dateFilter.onChangeToDate}
      />
    </div>
  );
};
