import { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext();

export const themeTypes = {
  light: "light",
  dark: "dark"
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeTypes.light);
  document.documentElement.dataset.theme = theme;

  const switchTheme = (currentTheme) => {
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  };
  const value = useMemo(() => ({ theme, switchTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
