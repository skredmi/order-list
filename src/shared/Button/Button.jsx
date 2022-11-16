import classnames from "classnames";
import styles from "./Button.module.css";
import { Icon } from "../Icon/Icon";
import {
  BUTTON_THEME as buttonThemeTypes,
  BUTTON_SIZE as buttonSizeTypes,
} from "../../constants/constants";

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
    [styles.colorPrimary]: theme === buttonThemeTypes.primary,
    [styles.colorTransparent]: theme === buttonThemeTypes.transparent,
    [styles.colorDark]: theme === buttonThemeTypes.dark,
    [styles.colorWarning]: theme === buttonThemeTypes.warning,
    [styles.iconOnly]: !children && nameIcon,
    [styles.fullWidth]: isFullWidth,
    [styles.sizeSmall]: size === buttonSizeTypes.small,
  });
  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button className={blockClass} type={type} onClick={onClick} {...props}>
      <Icon nameIcon={nameIcon} className={className} />
      {children}
    </button>
  );
};
