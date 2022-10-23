import classNames from "classnames";
import styles from "./MainPage.module.css";
import { FilterContainer } from "../modules/FilterContainer/FilterContainer";
import { Header } from "../modules/Header/Header";

export const MainPage = () => {
  const blockClass = classNames(styles.page);
  return (
    <div className={blockClass}>
      <Header />
      <FilterContainer />
    </div>
  );
};
