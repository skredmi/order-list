import classnames from "classnames";
import styles from "./Searchbar.module.css";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

export const Searchbar = ({
  className,
  placeholder,
  value,
  onReset,
  onChange,
  ...props
}) => (
  <div className={styles.searchbar}>
    <input
      className={classnames(styles.searchbarField, className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
    <Icon nameIcon="search" className={styles.iconSearch} />
    {value && (
      <Button
        nameIcon="xMedium"
        theme="transparent"
        className={styles.iconDelete}
        onClick={onReset}
      />
    )}
  </div>
);
