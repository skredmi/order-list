/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import classnames from "classnames";
import styles from "./Checkbox.module.css";
import { Icon } from "../Icon/Icon";
import { DropdownTypes } from "../Dropdown/Dropdown";

export const Checkbox = ({
  className,
  checked,
  text,
  type = "checkbox",
  ...props
}) => {
  const blockClass = classnames(
    DropdownTypes.list ? styles.checkboxDropdown : styles.checkbox,
    {
      [styles["area:checked"]]: checked,
      [className]: !!className
    }
  );

  return (
    <div className={blockClass} {...props}>
      <label
        className={DropdownTypes.list ? styles.wrapperDropdown : styles.wrapper}
      >
        <input type={type} className={styles.area} checked={checked} />
        {text && <span className={styles.title}>{text}</span>}
        <Icon
          className={
            DropdownTypes.list ? styles.checkmarkDropdown : styles.checkmark
          }
          nameIcon="checkmark"
        />
      </label>
    </div>
  );
};
