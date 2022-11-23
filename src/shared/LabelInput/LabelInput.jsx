import classnames from "classnames";
import styles from "./LabelInput.module.css";

export const LabelInput = ({ control, label, className }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={classnames(styles.label, className)}>
    <span className={styles.title}>{label}</span>
    {control}
  </label>
);
