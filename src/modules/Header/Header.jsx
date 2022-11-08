import styles from "./Header.module.css";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Список заказов</h1>
    <ThemeSwitcher />
  </header>
);
