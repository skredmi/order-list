import { ThemeProvider } from "./components/modules/ThemeContext/ThemeContext";
import { MainPage } from "./components/pages/MainPage";

export const App = () => (
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
