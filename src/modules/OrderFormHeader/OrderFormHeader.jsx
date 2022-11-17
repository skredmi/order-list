import styles from "./OrderFormHeader.module.css";
import { Button } from "../../shared/Button/Button";
import { BUTTON_THEME as buttonThemeTypes } from "../../constants/constants";

export const OrderFormHeader = ({ onCloseForm, selectedOrder }) => (
  <div className={styles.header}>
    <h1 className={styles.headerTitle}>Заявка #{selectedOrder.numberOrder}</h1>
    <Button
      theme={buttonThemeTypes.transparent}
      nameIcon="xLarge"
      onClick={onCloseForm}
      className={styles.iconDelete}
    />
  </div>
);
