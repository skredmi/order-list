import { useContext, useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const ThemeSwitcherContainer = ({ className }) => {
  const [isOpenThemeSwitcher, setIsOpenThemeSwitcher] = useState(false);
  const handleThemeSwitcherClick = () => {
    setIsOpenThemeSwitcher(!isOpenThemeSwitcher);
  };

  const { theme, switchTheme } = useContext(ThemeContext);
  const handleSwitchTheme = (currentTheme) => {
    switchTheme(currentTheme);
    setIsOpenThemeSwitcher(false);
  };

  const buttonText = theme === "light" ? "Светлая тема" : "Темная тема";
  const nameIcon = theme === "light" ? "sun" : "moon";

  return (
    <ThemeSwitcher
      className={className}
      isOpen={isOpenThemeSwitcher}
      onHandleThemeSwitcherOpen={handleThemeSwitcherClick}
      onHandleSwithThemeClick={handleSwitchTheme}
      buttonText={buttonText}
      nameIcon={nameIcon}
    />
  );
};
