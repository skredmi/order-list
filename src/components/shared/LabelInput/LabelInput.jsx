import styles from "./LabelInput.module.css";

export const LabelInput = ({ control, label }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={styles.label}>
    <span className={styles.title}>{label}</span>
    {control}
  </label>
);
