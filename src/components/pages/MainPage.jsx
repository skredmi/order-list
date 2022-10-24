import classNames from "classnames";
import styles from "./MainPage.module.css";
import { FilterContainer } from "../modules/ordersPage/components/FilterContainer/FilterContainer";
import { Header } from "../modules/ordersPage/components/Header/Header";

export const MainPage = () => (
  <div className={classNames(styles.page)}>
    <Header />
    <FilterContainer />
  </div>
);
