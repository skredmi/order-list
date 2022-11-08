import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import { Button } from "../../shared/Button/Button";
import { FilterSum } from "../FilterSum/FilterSum";
import { FilterDate } from "../FilterDate/FilterDate";
import { FilterStatus } from "../FilterStatus/FilterStatus";
import { Icon } from "../../shared/Icon/Icon";
import { Searchbar } from "../../shared/Searchbar/Searchbar";
import {
  changeSearchValue,
  resetSearchValue,
  resetAllValue,
} from "../../store/slices/filters/filterSlice";
import { getSearchValue } from "../../store/slices/filters/filterSelector";

export const Filter = () => {
  const dispatch = useDispatch();

  const [isOpenFiltersContainer, setIsOpenFiltersContainer] = useState(false);

  const handleOpenFiltersContainer = () => {
    setIsOpenFiltersContainer(!isOpenFiltersContainer);
  };

  const searchValue = useSelector(getSearchValue);
  const handleChange = (event) => {
    dispatch(
      changeSearchValue({
        type: "changeSearchValue",
        value: event.target.value,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetSearchValue());
  };

  const handleResetAllValue = () => {
    dispatch(resetAllValue());
  };

  return (
    <>
      <section className={styles.filter}>
        <div className={styles.item}>
          <Searchbar
            placeholder="Номер заказа или ФИО"
            value={searchValue}
            onChange={handleChange}
            onReset={handleReset}
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
            <Button theme="transparent" onClick={handleResetAllValue}>
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
