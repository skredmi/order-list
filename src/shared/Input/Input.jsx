import classnames from "classnames";
import styles from "./Input.module.css";
import { Icon } from "../Icon/Icon";

const InputTypes = {
  primary: "primary",
  incorrect: "incorrect",
};

export const Input = ({
  className,
  placeholder,
  disabled,
  value,
  onChange,
  onReset,
  prefix,
  postfix,
  inputStyle = "primary",
  ...props
}) => {
  const blockClass = classnames(styles.inputField, className, {
    [styles.incorrect]: inputStyle === InputTypes.incorrect,
    [styles.inputPrefix]: prefix,
    [styles.disabled]: disabled,
  });

  return (
    <div className={styles.input}>
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      <input
        className={blockClass}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {disabled && <Icon nameIcon="locked" className={styles.iconLocked} />}
      {value && postfix && !disabled && (
        <div className={styles.postfix}>{postfix}</div>
      )}
    </div>
  );
};
