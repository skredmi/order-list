import styles from "./ThemeSwitcher.module.css";
import { Button } from "../../../../shared/Button/Button";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { themeTypes } from "../ThemeContext/ThemeContext";

export const ThemeSwitcher = ({
  isOpen,
  onHandleThemeSwitcherOpen,
  onHandleSwithThemeClick,
  theme,
}) => (
  <>
    <Button
      theme="transparent"
      className={styles.iconTransparent}
      nameIcon={theme === "light" ? "sun" : "moon"}
      onClick={onHandleThemeSwitcherOpen}
    >
      {theme === "light" ? "Светлая тема" : "Темная тема"}
    </Button>
    {isOpen && (
      <Dropdown title="Выберите тему" className={styles.dropdown}>
        <Button
          theme={theme === "light" ? "primary" : "transparent"}
          isFullWidth
          size="small"
          nameIcon="sun"
          className={
            theme === "light" ? styles.iconPrimary : styles.iconTransparent
          }
          onClick={() => onHandleSwithThemeClick(themeTypes.light)}
        >
          Светлая
        </Button>
        <Button
          theme={theme === "dark" ? "primary" : "transparent"}
          isFullWidth
          size="small"
          nameIcon="moon"
          className={
            theme === "dark" ? styles.iconPrimary : styles.iconTransparent
          }
          onClick={() => onHandleSwithThemeClick(themeTypes.dark)}
        >
          Темная
        </Button>
      </Dropdown>
    )}
  </>
);
