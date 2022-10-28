import classnames from "classnames";
import styles from "./Header.module.css";
import { ThemeSwitcherContainer } from "../ThemeSwitcherContainer/ThemeSwitcherContainer";

export const Header = () => (
  <header className={classnames(styles.header)}>
    <h1 className={styles.title}>Список заказов</h1>
    <ThemeSwitcherContainer />
  </header>
);
