import classnames from "classnames";
import styles from "./Icon.module.css";
import { icons } from "../../../assets/icons/index";

export const Icon = ({ nameIcon, className }) => {
  const IconComponent = icons[nameIcon];
  if (!IconComponent) {
    return null;
  }

  const blockClass = classnames(styles.icon, className);

  return <IconComponent className={blockClass} />;
};
