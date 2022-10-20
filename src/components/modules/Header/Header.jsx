import styles from "./Header.module.css";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";

export const Header = ({ onClick, isOpen }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>Список заказов</h1>
    <Button
      theme="transparent"
      fullWidth={false}
      smallSize={false}
      nameIcon="sun"
      onClick={onClick}
    >
      Светлая тема
    </Button>
    <Dropdown
      dropdownStyle="button"
      title="Выберите тему"
      className={styles.dropdown}
      isOpen={isOpen}
    >
      <Button theme="transparent" fullWidth smallSize nameIcon="sun">
        Светлая
      </Button>
      <Button theme="primary" fullWidth smallSize nameIcon="moon">
        Темная
      </Button>
    </Dropdown>
  </header>
);
