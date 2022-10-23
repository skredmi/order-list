/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import classnames from "classnames";
import styles from "./Input.module.css";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

const InputTypes = {
  primary: "primary",
  incorrect: "incorrect",
  search: "search",
  dropdown: "dropdown",
  filter: "filter"
};

export const Input = ({
  label,
  className,
  placeholder,
  disabled,
  value,
  onChange,
  onClick,
  prefix,
  inputStyle = "primary",
  ...props
}) => {
  const blockClass = classnames(
    styles.inputField,
    styles[":focus"],
    styles["::placeholder"],
    {
      [styles.incorrect]: inputStyle === InputTypes.incorrect,
      [styles.search]: inputStyle === InputTypes.search,
      [styles.inputFieldDropdown]: inputStyle === InputTypes.dropdown,
      [styles.inputPrefix]: prefix,
      [styles.disabled]: disabled,
      [className]: !!className
    }
  );

  return (
    <div
      className={
        inputStyle === InputTypes.dropdown ? styles.inputDropdown : styles.input
      }
      {...props}
    >
      <label className={styles.title}>
        {label}
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          className={blockClass}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          />
        {disabled && <Icon nameIcon="locked" theme="locked" />}
        {inputStyle === InputTypes.primary && value && (
          <Button
            className={styles.button}
            theme="delete"
            onClick={onClick}
            nameIcon="x-medium"
          />
        )}
        {inputStyle === InputTypes.filter && (
          <Button
            className={styles.button}
            theme="delete"
            onClick={onClick}
            nameIcon="v-arrow"
          />
        )}
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
              className={`${styles.button} ${styles.buttonSearch}`}
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
