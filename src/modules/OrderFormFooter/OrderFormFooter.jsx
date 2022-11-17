import styles from "./OrderFormFooter.module.css";
import { Button } from "../../shared/Button/Button";
import { BUTTON_THEME as buttonThemeTypes } from "../../constants/constants";

export const OrderFormFooter = () => (
  <div className={styles.footer}>
    <div className={styles.footerError}>Ошибка или индикатор загрузки</div>
    <Button
      theme={buttonThemeTypes.primary}
      nameIcon="checkmark"
      className={styles.footerIcon}
    >
      Сохранить
    </Button>
  </div>
);
