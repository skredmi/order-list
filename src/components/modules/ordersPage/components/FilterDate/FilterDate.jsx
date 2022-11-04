import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterDate.module.css";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import {
  changeFromDateValue,
  resetFromDateValue,
  changeToDateValue,
  resetToDateValue,
} from "../../../../store/slices/filterSlice";

export const FilterDate = () => {
  const dispatch = useDispatch();

  const getFromDateValue = useSelector((state) => state.filter.fromDatevalue);
  const getToDateValue = useSelector((state) => state.filter.toDateValue);

  const handleChangeFromDate = (event) => {
    dispatch(
      changeFromDateValue({
        type: "changeFromDateValue",
        value: event.target.value,
      })
    );
  };

  const handleChangeToDate = (event) => {
    dispatch(
      changeToDateValue({
        type: "changeToDateValue",
        value: event.target.value,
      })
    );
  };

  const handleResetFromDate = () => {
    dispatch(resetFromDateValue());
  };

  const handleResetToDate = () => {
    dispatch(resetToDateValue());
  };

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
                onClick={handleResetFromDate}
              />
            }
            value={getFromDateValue}
            onChange={handleChangeFromDate}
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
            onClick={handleResetToDate}
          />
        }
        value={getToDateValue}
        onChange={handleChangeToDate}
      />
    </div>
  );
};
