/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import classnames from "classnames";
import styles from "./Button.module.css";
import { Icon } from "../Icon/Icon";

const ButtonTypes = {
  primary: "primary",
  transparent: "transparent",
  black: "black"
};

export const Button = ({
  children,
  nameIcon,
  type = "button",
  theme,
  fullWidth,
  smallSize,
  className,
  onClick,
  ...props
}) => {
  const blockClass = classnames(styles.button, {
    [styles.color_primary]: theme === ButtonTypes.primary,
    [styles.color_transparent]: theme === ButtonTypes.transparent,
    [styles.color_black]: theme === ButtonTypes.black,
    [styles.iconOnly]: !children,
    [styles.fullWidth]: fullWidth,
    [styles.sizeSmall]: smallSize,
    [styles.smallIconOnly]: smallSize && !children,
    [className]: !!className
  });
  return (
    <button className={blockClass} type={type} {...props} onClick={onClick}>
      <Icon nameIcon={nameIcon} theme={theme} {...props} />
      {children}
    </button>
  );
};
