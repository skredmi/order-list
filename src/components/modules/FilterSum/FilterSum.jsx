import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterSum.module.css";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import {
  changeFromSumValue,
  resetFromSumValue,
  changeToSumValue,
  resetToSumValue,
} from "../../store/slices/filters/filterSlice";
import {
  getFromSumValue,
  getToSumValue,
} from "../../store/slices/filters/filterSelector";

export const FilterSum = () => {
  const dispatch = useDispatch();

  const fromSumValue = useSelector(getFromSumValue);
  const toSumValue = useSelector(getToSumValue);

  const handleChangeFromSumValue = (event) => {
    dispatch(
      changeFromSumValue({
        type: "changeFromSumValue",
        value: event.target.value,
      })
    );
  };

  const handleChangeToSumValue = (event) => {
    dispatch(
      changeToSumValue({
        type: "changeToSumValue",
        value: event.target.value,
      })
    );
  };

  const handleResetFromSumValue = () => {
    dispatch(resetFromSumValue());
  };

  const handleResetToSumValue = () => {
    dispatch(resetToSumValue());
  };

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
                onClick={handleResetFromSumValue}
              />
            }
            value={fromSumValue}
            onChange={handleChangeFromSumValue}
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
            onClick={handleResetToSumValue}
          />
        }
        value={toSumValue}
        onChange={handleChangeToSumValue}
      />
    </div>
  );
};
