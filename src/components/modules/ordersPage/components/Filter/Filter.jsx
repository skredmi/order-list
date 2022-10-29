import { useContext } from "react";
import styles from "./Filter.module.css";
import { Button } from "../../../../shared/Button/Button";
import { Input } from "../../../../shared/Input/Input";
import { FilterSum } from "../FilterSum/FilterSum";
import { FilterDate } from "../FilterDate/FilterDate";
import { FilterStatus } from "../FilterStatus/FilterStatus";
import { FilterContext } from "../../../../context/FilterContext/FilterContext";

export const Filter = () => {
  const { filtersDropdown, searchInput, resetAllFilters } =
    useContext(FilterContext);
  return (
    <>
      <section className={styles.filter}>
        <div className={styles.item}>
          <Input
            placeholder="Номер заказа или ФИО"
            prefix={
              <Button
                nameIcon="search"
                theme="transparent"
                className={styles.iconSearch}
              />
            }
            postfix={
              <Button
                nameIcon="xMedium"
                theme="transparent"
                className={styles.iconDelete}
                onClick={searchInput.onReset}
              />
            }
            value={searchInput.value}
            onChange={searchInput.onChange}
          />
          <Button
            theme="primary"
            nameIcon="filter"
            className={styles.iconPrimary}
            onClick={filtersDropdown.onClick}
          >
            Фильтры
          </Button>
          {filtersDropdown.isOpen && (
            <Button theme="transparent" onClick={resetAllFilters.onClick}>
              Сбросить фильтры
            </Button>
          )}
        </div>
        <Button
          theme="transparent"
          nameIcon="refresh"
          className={styles.iconTransparent}
        >
          Загрузка
        </Button>
      </section>
      {filtersDropdown.isOpen && (
        <section className={styles.dropdown}>
          <div className={styles.dropdownItem}>
            <FilterDate />
            <FilterStatus />
            <FilterSum />
            <Button theme="transparent">Применить</Button>
          </div>
        </section>
      )}
    </>
  );
};
