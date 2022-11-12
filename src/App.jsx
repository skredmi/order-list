import { ThemeProvider } from "./modules/ThemeContext/ThemeContext";
import { MainPage } from "./pages/MainPage";

export const App = () => (
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
