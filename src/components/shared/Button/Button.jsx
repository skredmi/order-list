import classnames from "classnames";
import styles from "./Button.module.css";
import { Icon } from "../Icon/Icon";

const ButtonThemeTypes = {
  primary: "primary",
  transparent: "transparent",
  dark: "dark",
  warning: "warning",
};

const ButtonSizeTypes = {
  small: "small",
};

export const Button = ({
  children,
  nameIcon,
  type = "button",
  theme,
  isFullWidth,
  size,
  className,
  onClick,
  ...props
}) => {
  const blockClass = classnames(styles.button, className, {
    [styles.colorPrimary]: theme === ButtonThemeTypes.primary,
    [styles.colorTransparent]: theme === ButtonThemeTypes.transparent,
    [styles.colorDark]: theme === ButtonThemeTypes.dark,
    [styles.colorWarning]: theme === ButtonThemeTypes.warning,
    [styles.iconOnly]: !children && nameIcon,
    [styles.fullWidth]: isFullWidth,
    [styles.sizeSmall]: size === ButtonSizeTypes.small,
  });
  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button className={blockClass} type={type} onClick={onClick} {...props}>
      <Icon nameIcon={nameIcon} className={className} />
      {children}
    </button>
  );
};
