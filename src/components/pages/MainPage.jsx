import classNames from "classnames";
import styles from "./MainPage.module.css";
import { FilterContainer } from "../modules/ordersPage/components/FilterContainer/FilterContainer";
import { Header } from "../modules/ordersPage/components/Header/Header";
import { Table } from "../modules/ordersPage/components/Table/Table";

export const MainPage = () => (
  <div className={classNames(styles.page)}>
    <Header />
    <FilterContainer />
    <Table />
  </div>
);
