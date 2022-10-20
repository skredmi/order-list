/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import classnames from "classnames";
import { DropdownTypes } from "../Dropdown/Dropdown";
import styles from "./Radio.module.css";

export const Radio = ({
  className,
  checked,
  text,
  type = "radio",
  name = "radio",
  ...props
}) => {
  const blockClass = classnames(
    DropdownTypes.list ? styles.radioDropdown : styles.radio,
    {
      [styles["area:checked"]]: checked,
      [styles.textOnly]: text,
      [className]: !!className
    }
  );

  return (
    <div className={blockClass} {...props}>
      <label
        className={DropdownTypes.list ? styles.wrapperDropdown : styles.wrapper}
      >
        <input
          type={type}
          className={styles.area}
          checked={checked}
          name={name}
        />
        {text && <span className={styles.title}>{text}</span>}
      </label>
    </div>
  );
};
