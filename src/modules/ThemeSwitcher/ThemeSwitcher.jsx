import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import {
  THEME_TYPES as themeTypes,
  BUTTON_THEME as buttonThemeTypes,
  BUTTON_SIZE as buttonSizeTypes,
} from "../../constants/constants";

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
        nameIcon={theme === themeTypes.light ? "sun" : "moon"}
        onClick={handleThemeSwitcherClick}
      >
        {theme === themeTypes.light ? "Светлая тема" : "Темная тема"}
      </Button>
      {isOpenThemeSwitcher && (
        <Dropdown className={styles.dropdown}>
          <LabelInput
            control={
              <>
                <Button
                  theme={
                    theme === themeTypes.light
                      ? buttonThemeTypes.primary
                      : buttonThemeTypes.transparent
                  }
                  isFullWidth
                  size={buttonSizeTypes.small}
                  nameIcon="sun"
                  className={
                    theme === themeTypes.light
                      ? styles.iconPrimary
                      : styles.iconTransparent
                  }
                  onClick={() => handleSwitchTheme(themeTypes.light)}
                >
                  Светлая
                </Button>
                <Button
                  theme={
                    theme === themeTypes.dark
                      ? buttonThemeTypes.primary
                      : buttonThemeTypes.transparent
                  }
                  isFullWidth
                  size={buttonSizeTypes.small}
                  nameIcon="moon"
                  className={
                    theme === themeTypes.dark
                      ? styles.iconPrimary
                      : styles.iconTransparent
                  }
                  onClick={() => handleSwitchTheme(themeTypes.dark)}
                >
                  Темная
                </Button>
              </>
            }
            label="Выберите тему"
          />
        </Dropdown>
      )}
    </>
  );
};
