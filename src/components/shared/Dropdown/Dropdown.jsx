import classnames from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ title, children, className }) => (
  /* eslint-disable jsx-a11y/label-has-associated-control */
  <div className={classnames(styles.dropdowm, className)}>
    {title && <label className={styles.title}>{title}</label>}
    <div className={styles.item}>{children}</div>
  </div>
);
