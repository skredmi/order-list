import styles from "./LabelControl.module.css";

export const LabelControl = ({ control, label }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={styles.label}>
    {control}
    <span className={styles.title}>{label}</span>
  </label>
);
