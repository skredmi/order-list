import classnames from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ className, checked, onChange, ...props }) => (
  <input
    type="checkbox"
    className={classnames(styles.area, className)}
    checked={checked}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);
