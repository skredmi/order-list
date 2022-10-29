import { useContext, useState } from "react";
import classnames from "classnames";
import styles from "./Filter.module.css";
import { Button } from "../../../../shared/Button/Button";
import { FilterSum } from "../FilterSum/FilterSum";
import { FilterDate } from "../FilterDate/FilterDate";
import { FilterStatus } from "../FilterStatus/FilterStatus";
import { Icon } from "../../../../shared/Icon/Icon";
import { FilterContext } from "../../../../context/FilterContext/FilterContext";
import { Searchbar } from "../../../../shared/Searchbar/Searchbar";

export const Filter = () => {
  const { searchInput, resetAllFilters } = useContext(FilterContext);
  const [isOpenFiltersContainer, setIsOpenFiltersContainer] = useState(false);

  const handleOpenFiltersContainer = () => {
    setIsOpenFiltersContainer(!isOpenFiltersContainer);
  };

  return (
    <>
      <section className={classnames(styles.filter)}>
        <div className={styles.item}>
          <Searchbar
            placeholder="Номер заказа или ФИО"
            value={searchInput.value}
            onChange={searchInput.onChange}
            onReset={searchInput.onReset}
          />
          <Button
            theme={isOpenFiltersContainer ? "primary" : "transparent"}
            nameIcon="filter"
            className={
              isOpenFiltersContainer
                ? styles.iconPrimary
                : styles.iconTransparent
            }
            onClick={handleOpenFiltersContainer}
          >
            Фильтры
          </Button>
          {isOpenFiltersContainer && (
            <Button theme="transparent" onClick={resetAllFilters.onClick}>
              Сбросить фильтры
            </Button>
          )}
        </div>
        <div className={styles.filterLoad}>
          <Icon nameIcon="refresh" className={styles.iconLoad} />
          Загрузка
        </div>
      </section>
      {isOpenFiltersContainer && (
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
