import classnames from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({ className, name = "radio", checked, ...props }) => (
  <input
    type="radio"
    name={name}
    className={classnames(styles.area, className)}
    checked={checked}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);
