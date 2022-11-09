import classnames from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ className, checked, onChange, value, ...props }) => (
  <input
    type="checkbox"
    className={classnames(styles.area, className)}
    checked={checked}
    onChange={onChange}
    value={value}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);
