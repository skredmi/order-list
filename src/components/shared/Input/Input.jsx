/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import classnames from "classnames";
import styles from "./Input.module.css";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

const InputTypes = {
  incorrect: "incorrect",
  search: "search",
  dropdown: "dropdown"
};

export const Input = ({
  label,
  className,
  placeholder,
  disabled,
  inputStyle,
  value,
  onChange,
  onClick,
  ...props
}) => {
  const blockClass = classnames(
    styles.input__field,
    styles[":focus"],
    styles["::placeholder"],
    {
      [styles.incorrect]: inputStyle === InputTypes.incorrect,
      [styles.search]: inputStyle === InputTypes.search,
      [styles.input__fieldDropdown]: inputStyle === InputTypes.dropdown,
      [styles.disabled]: disabled,
      [className]: !!className
    }
  );

  return (
    <div
      className={
        inputStyle === InputTypes.dropdown
          ? styles.input_dropdown
          : styles.input
      }
      {...props}
    >
      <label className={styles.title}>
        {label}
        <input
          className={blockClass}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
        {disabled && <Icon nameIcon="locked" theme="locked" />}
        {inputStyle === InputTypes.incorrect && (
          <Button
            className={styles.button}
            nameIcon="x-medium"
            theme="delete"
            onClick={onClick}
          />
        )}
        {inputStyle === InputTypes.search && (
          <>
            <Button
              className={`${styles.button} ${styles.button_search}`}
              nameIcon="search"
              theme="search"
            />
            {value && (
              <Button
                className={styles.button}
                nameIcon="x-medium"
                theme="delete"
                onClick={onClick}
              />
            )}
          </>
        )}
      </label>
    </div>
  );
};
