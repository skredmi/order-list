/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import classnames from "classnames";
import styles from "./Dropdown.module.css";

export const DropdownTypes = {
  list: "list",
  button: "button",
  input: "input"
};

export const Dropdown = ({
  dropdownStyle,
  title,
  children,
  className,
  isOpen,
  ...props
}) => {
  const blockClass = classnames(styles.container, {
    [styles.button]: dropdownStyle === DropdownTypes.button,
    [styles.dropdown_inputSize]: dropdownStyle === DropdownTypes.input,
    [styles.dropdown_hidden]: !isOpen,
    [className]: !!className
  });
  return (
    <div className={blockClass} {...props}>
      {title && <label className={styles.title}>{title}</label>}
      {dropdownStyle === DropdownTypes.button && children}
      {dropdownStyle === DropdownTypes.input && children}
      {dropdownStyle === DropdownTypes.list && (
        <div>
          {children.map((item, index) => (
            <div className={styles.dropdown} key={item[index]}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
