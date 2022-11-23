import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import { Button } from "../../shared/Button/Button";
import { FilterSum } from "./FilterSum/FilterSum";
import { FilterDate } from "./FilterDate/FilterDate";
import { FilterStatus } from "./FilterStatus/FilterStatus";
import { Icon } from "../../shared/Icon/Icon";
import { Searchbar } from "../../shared/Searchbar/Searchbar";
import {
  setSearchFilter,
  setFilter,
  resetFilters,
  initialState,
  resetSelectedOrders,
} from "../../store/slices/filters/filterSlice";
import { getSearchValue } from "../../store/slices/filters/filterSelector";
import { BUTTON_THEME as buttonThemeTypes } from "../../constants/constants";

export const Filter = () => {
  const [isOpenFiltersContainer, setIsOpenFiltersContainer] = useState(false);

  const handleOpenFiltersContainer = () => {
    setIsOpenFiltersContainer(!isOpenFiltersContainer);
  };
  const searchValue = useSelector(getSearchValue);
  const dispatch = useDispatch();
  const [filtersValue, setFiltersValue] = useState({ ...initialState });

  const handleChangeSearchFilterValue = (event) => {
    dispatch(resetSelectedOrders());
    dispatch(setSearchFilter(event.target.value));
  };

  const handleResetSearchFilter = () => {
    dispatch(setSearchFilter(""));
  };

  const handleChangeFiltersValue = (key) => (event) => {
    setFiltersValue({ ...filtersValue, [key]: event.target.value });
  };

  const handleResetFiltersValue = (key) => {
    setFiltersValue({ ...filtersValue, [key]: "" });
  };

  const getFiltersValue = (key) => filtersValue[key];

  const handleResetAllFilters = () => {
    setFiltersValue({ ...initialState });
    dispatch(resetFilters());
  };

  const handleSetFiltersClick = () => {
    dispatch(setFilter(filtersValue));
    dispatch(resetSelectedOrders());
  };

  return (
    <>
      <section className={styles.filter}>
        <div className={styles.item}>
          <Searchbar
            placeholder="Номер заказа или ФИО"
            value={searchValue}
            onChange={handleChangeSearchFilterValue}
            onReset={handleResetSearchFilter}
          />
          <Button
            theme={
              isOpenFiltersContainer
                ? buttonThemeTypes.primary
                : buttonThemeTypes.transparent
            }
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
            <Button
              theme={buttonThemeTypes.transparent}
              onClick={handleResetAllFilters}
            >
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
            <FilterDate
              onChange={handleChangeFiltersValue}
              onReset={handleResetFiltersValue}
              value={getFiltersValue}
            />
            <FilterStatus state={[filtersValue, setFiltersValue]} />
            <FilterSum
              onChange={handleChangeFiltersValue}
              onReset={handleResetFiltersValue}
              value={getFiltersValue}
            />
            <Button
              theme={buttonThemeTypes.transparent}
              onClick={handleSetFiltersClick}
            >
              Применить
            </Button>
          </div>
        </section>
      )}
    </>
  );
};
