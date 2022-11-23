import styles from "./OrderFormFooter.module.css";
import { Button } from "../../../shared/Button/Button";
import { BUTTON_THEME as buttonThemeTypes } from "../../../constants/constants";

export const OrderFormFooter = ({
  handleSubmitForm,
  errorMessage,
  isActiveError,
}) => (
  <div className={styles.footer}>
    {isActiveError && <div className={styles.footerError}>{errorMessage}</div>}
    <Button
      theme={buttonThemeTypes.primary}
      nameIcon="checkmark"
      className={styles.footerIcon}
      onClick={handleSubmitForm}
    >
      Сохранить
    </Button>
  </div>
);
