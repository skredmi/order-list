import styles from "./MainPage.module.css";
import { Filter } from "../modules/Filter/Filter";
import { Header } from "../modules/Header/Header";
import { FilterContextProvider } from "../context/FilterContext/FilterContext";
import { OrderTable } from "../modules/OrderTable/OrderTable";

export const MainPage = () => (
  <div className={styles.page}>
    <Header />
    <FilterContextProvider>
      <Filter />
    </FilterContextProvider>
    <OrderTable />
  </div>
);
