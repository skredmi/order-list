import classNames from "classnames";
import styles from "./MainPage.module.css";
import { Filter } from "../modules/ordersPage/components/Filter/Filter";
import { Header } from "../modules/ordersPage/components/Header/Header";
import { FilterContextProvider } from "../context/FilterContext/FilterContext";
import { Table } from "../modules/ordersPage/components/Table/Table";

export const MainPage = () => (
  <div className={classNames(styles.page)}>
    <Header />
    <FilterContextProvider>
      <Filter />
    </FilterContextProvider>
    <Table />
  </div>
);
