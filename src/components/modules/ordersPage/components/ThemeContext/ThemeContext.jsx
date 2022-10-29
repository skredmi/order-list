import {
  useEffect,
  useCallback,
  useState,
  createContext,
  useMemo,
} from "react";

export const ThemeContext = createContext();

export const themeTypes = {
  light: "light",
  dark: "dark",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeTypes.light);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const switchTheme = useCallback((currentTheme) => {
    setTheme(currentTheme);
  }, []);

  const value = useMemo(() => ({ theme, switchTheme }), [theme, switchTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
