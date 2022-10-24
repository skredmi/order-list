import styles from "./Filter.module.css";
import { Button } from "../../../../shared/Button/Button";
import { Input } from "../../../../shared/Input/Input";
import { FilterSumContainer } from "../FilterSumContainer/FilterSumContainer";
import { FilterDateContainer } from "../FilterDateContainer/FilterDateContainer";
import { FilterStatusContainer } from "../FilterStatusContainer/FilterStatusContainer";

export const Filter = ({
  inputSearchValue,
  onChangeInputSeacrhValue,
  onClearInputValue,
  onOpenFiltersContainer,
  isOpenFiltersContainer,
}) => (
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
              onClick={onClearInputValue}
            />
          }
          value={inputSearchValue}
          onChange={onChangeInputSeacrhValue}
        />
        <Button
          theme="primary"
          nameIcon="filter"
          className={styles.iconPrimary}
          onClick={onOpenFiltersContainer}
        >
          Фильтры
        </Button>
        {isOpenFiltersContainer && (
          <Button theme="transparent">Сбросить фильтры</Button>
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
    {isOpenFiltersContainer && (
      <section className={styles.dropdown}>
        <div className={styles.dropdownItem}>
          <FilterDateContainer />
          <FilterStatusContainer />
          <FilterSumContainer />
          <Button theme="transparent">Применить</Button>
        </div>
      </section>
    )}
  </>
);
