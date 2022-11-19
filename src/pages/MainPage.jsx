import styles from "./MainPage.module.css";
import { Filter } from "../modules/Filter/Filter";
import { Header } from "../modules/Header/Header";
import { OrderTable } from "../modules/OrderTable/OrderTable";

export const MainPage = () => (
  <div className={styles.page}>
    <Header />
    <Filter />
    <OrderTable />
  </div>
);
