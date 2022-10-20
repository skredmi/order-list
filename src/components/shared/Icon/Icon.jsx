/* eslint-disable react/jsx-props-no-spreading */
import classnames from "classnames";
import styles from "./Icon.module.css";
import { icons } from "../../../assets/icons/index";

const IconTypes = {
  primary: "primary",
  transparent: "transparent",
  black: "black",
  delete: "delete",
  locked: "locked",
  search: "search"
};

export const Icon = ({ nameIcon, theme, className, ...props }) => {
  const IconComponent = icons[nameIcon];
  if (!IconComponent) {
    return null;
  }

  const blockClass = classnames(styles.icon, {
    [styles.primary]: theme === IconTypes.primary,
    [styles.transparent]: theme === IconTypes.transparent,
    [styles.black]: theme === IconTypes.black,
    [styles.delete]: theme === IconTypes.delete,
    [styles.locked]: theme === IconTypes.locked,
    [styles.search]: theme === IconTypes.search,
    [className]: !!className
  });

  return <IconComponent className={blockClass} {...props} />;
};
