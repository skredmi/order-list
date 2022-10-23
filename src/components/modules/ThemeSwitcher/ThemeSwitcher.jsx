import classnames from "classnames";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { themeTypes } from "../ThemeContext/ThemeContext";

export const ThemeSwitcher = ({
  isOpen,
  onHandleThemeSwitcherOpen,
  onHandleSwithThemeClick,
  buttonText,
  nameIcon,
  className
}) => {
  const blockClass = classnames(styles.dropdown, { [className]: !!className });
  return (
    <>
      <Button
        theme="transparent"
        fullWidth={false}
        smallSize={false}
        nameIcon={nameIcon}
        onClick={onHandleThemeSwitcherOpen}
      >
        {buttonText}
      </Button>
      {isOpen && (
        <Dropdown
          dropdownStyle="button"
          title="Выберите тему"
          className={blockClass}
        >
          <Button
            theme="transparent"
            fullWidth
            smallSize
            nameIcon="sun"
            onClick={() => onHandleSwithThemeClick(themeTypes.light)}
          >
            Светлая
          </Button>
          <Button
            theme="primary"
            fullWidth
            smallSize
            nameIcon="moon"
            onClick={() => onHandleSwithThemeClick(themeTypes.dark)}
          >
            Темная
          </Button>
        </Dropdown>
      )}
    </>
  );
};
