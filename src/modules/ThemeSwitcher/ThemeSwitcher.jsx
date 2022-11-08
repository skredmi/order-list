import { useContext, useState } from "react";
import { ThemeContext, themeTypes } from "../ThemeContext/ThemeContext";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";

export const ThemeSwitcher = () => {
  const [isOpenThemeSwitcher, setIsOpenThemeSwitcher] = useState(false);
  const handleThemeSwitcherClick = () => {
    setIsOpenThemeSwitcher(!isOpenThemeSwitcher);
  };

  const { theme, switchTheme } = useContext(ThemeContext);
  const handleSwitchTheme = (currentTheme) => {
    switchTheme(currentTheme);
    setIsOpenThemeSwitcher(false);
  };
  return (
    <>
      <Button
        theme="transparent"
        className={styles.iconTransparent}
        nameIcon={theme === "light" ? "sun" : "moon"}
        onClick={handleThemeSwitcherClick}
      >
        {theme === "light" ? "Светлая тема" : "Темная тема"}
      </Button>
      {isOpenThemeSwitcher && (
        <Dropdown title="Выберите тему" className={styles.dropdown}>
          <Button
            theme={theme === "light" ? "primary" : "transparent"}
            isFullWidth
            size="small"
            nameIcon="sun"
            className={
              theme === "light" ? styles.iconPrimary : styles.iconTransparent
            }
            onClick={() => handleSwitchTheme(themeTypes.light)}
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
            onClick={() => handleSwitchTheme(themeTypes.dark)}
          >
            Темная
          </Button>
        </Dropdown>
      )}
    </>
  );
};
