import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterSum.module.css";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import {
  changeFromSumValue,
  resetFromSumValue,
  changeToSumValue,
  resetToSumValue,
} from "../../../../store/slices/filterSlice";

export const FilterSum = () => {
  const dispatch = useDispatch();

  const getFromSumValue = useSelector((state) => state.filter.fromSumValue);
  const getToSumValue = useSelector((state) => state.filter.toSumValue);

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
            value={getFromSumValue}
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
        value={getToSumValue}
        onChange={handleChangeToSumValue}
      />
    </div>
  );
};
