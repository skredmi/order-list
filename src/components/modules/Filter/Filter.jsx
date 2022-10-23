import styles from "./Filter.module.css";
import { Button } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";
import { FilterSumContainer } from "../FilterSumContainer/FilterSumContainer";
import { FilterDateContainer } from "../FilterDateContainer/FilterDateContainer";
import { FilterStatusContainer } from "../FilterStatusContainer/FilterStatusContainer";

export const Filter = ({
  inputSearchValue,
  onChangeInputSeacrhValue,
  onClearInputValue,
  onOpenFiltersContainer,
  isOpenFiltersContainer
}) => (
  <>
    <section className={styles.filter}>
      <div className={styles.item}>
        <Input
          placeholder="Номер заказа или ФИО"
          inputStyle="search"
          value={inputSearchValue}
          onClick={onClearInputValue}
          onChange={onChangeInputSeacrhValue}
        />
        <Button
          theme="primary"
          fullWidth={false}
          smallSize={false}
          nameIcon="filter"
          onClick={onOpenFiltersContainer}
        >
          Фильтры
        </Button>
        {isOpenFiltersContainer && (
          <Button theme="transparent" fullWidth={false} smallSize={false}>
            Сбросить фильтры
          </Button>
        )}
      </div>
      <Button
        theme="transparent"
        fullWidth={false}
        smallSize={false}
        nameIcon="refresh"
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
          <Button theme="transparent" fullWidth={false} smallSize={false}>
            Применить
          </Button>
        </div>
      </section>
    )}
  </>
);
