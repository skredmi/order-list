import { useState } from "react";
import styles from "./OrderFormHeader.module.css";
import { Button } from "../../shared/Button/Button";
import {
  BUTTON_THEME as buttonThemeTypes,
  BUTTON_SIZE as buttonSizeTypes,
} from "../../constants/constants";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { LabelInput } from "../../shared/LabelInput/LabelInput";

export const OrderFormHeader = ({ onCloseForm, numberOrder, isChanged }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleToggleOpenDropdown = () => {
    if (isChanged) {
      setIsOpenDropdown(!isOpenDropdown);
    } else onCloseForm();
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Заявка #{numberOrder}</h1>
      <Button
        theme={buttonThemeTypes.transparent}
        nameIcon="xLarge"
        onClick={handleToggleOpenDropdown}
        className={styles.iconDelete}
      />
      {isOpenDropdown && (
        <Dropdown className={styles.headerDropdown}>
          <LabelInput
            control={
              <>
                <Button
                  theme={buttonThemeTypes.transparent}
                  size={buttonSizeTypes.small}
                  isFullWidth
                  onClick={onCloseForm}
                >
                  Сбросить
                </Button>
                <Button
                  theme={buttonThemeTypes.primary}
                  size={buttonSizeTypes.small}
                  isFullWidth
                  onClick={handleToggleOpenDropdown}
                >
                  Остаться
                </Button>
              </>
            }
            label="Есть несохраненные изменения"
          />
        </Dropdown>
      )}
    </div>
  );
};
