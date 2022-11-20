import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./OrderTablePagination.module.css";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import { Input } from "../../shared/Input/Input";
import { getPage } from "../../store/slices/filters/filterSelector";
import { getSortedOrders } from "../../store/slices/orders/ordersSelector";
import {
  resetSelectedOrders,
  setCurrentPage,
} from "../../store/slices/filters/filterSlice";
import {
  PAGE_SIZE as pageSize,
  BUTTON_THEME as buttonThemeTypes,
  BUTTON_SIZE as buttonSizeTypes,
} from "../../constants/constants";

export const OrderTablePagination = () => {
  const [isOpenPageDropdown, setIsOpenPageDropdown] = useState(false);
  const handlOpenPageDropdownClick = () => {
    setIsOpenPageDropdown(!isOpenPageDropdown);
  };
  const dispatch = useDispatch();
  const handleSetPageClick = (page) => {
    dispatch(resetSelectedOrders());
    dispatch(setCurrentPage(page));
  };
  const sortedOrders = useSelector(getSortedOrders);
  const page = useSelector(getPage);
  const result = Math.ceil(sortedOrders.length / pageSize);
  const pageCounts = result !== 0 ? result : 1;

  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleResetInputValue = () => {
    setInputValue("");
  };

  const handleChangeInputValueByKey = (event) => {
    if (event.key === "Enter" && inputValue > 0 && inputValue <= pageCounts)
      handleSetPageClick(inputValue);
    setInputValue("");
  };

  const resultPages = (activePage, pageCount) => {
    let pages = [activePage];
    if (pageCount <= 7) {
      pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    } else {
      const diffBefore = activePage - 1;
      const diffAfter = pageCount - activePage;
      if (diffBefore >= 3) {
        if (Number(activePage) === Number(pageCount)) {
          pages.unshift(1, "...", activePage - 2, activePage - 1);
        } else {
          pages.unshift(1, "...", activePage - 1);
        }
      } else if (diffBefore === 2) {
        pages.unshift(1, pages - 1);
      } else if (diffBefore === 1) {
        pages.unshift(1);
      }

      if (diffAfter >= 3) {
        if (Number(activePage) === Number(1)) {
          pages.push(
            Number(activePage) + Number(1),
            Number(activePage) + Number(2),
            "...",
            pageCount
          );
        } else {
          pages.push(Number(activePage) + Number(1), "...", pageCount);
        }
      } else if (diffAfter === 2) {
        pages.push(Number(activePage) + Number(1), pageCount);
      } else if (diffAfter === 1) {
        pages.push(pageCount);
      }
    }
    return pages;
  };

  const pages = resultPages(page, pageCounts);

  return (
    <div className={styles.tablePagination}>
      {pages.map((item, index) => (
        <Button
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          theme={
            Number(item) === Number(page)
              ? buttonThemeTypes.primary
              : buttonThemeTypes.transparent
          }
          size={buttonSizeTypes.small}
          onClick={() => handleSetPageClick(item)}
          disabled={Number(item) === Number(page) || item === "..."}
        >
          {item}
        </Button>
      ))}
      {pageCounts > 1 && (
        <Button
          theme={buttonThemeTypes.transparent}
          size={buttonSizeTypes.small}
          onClick={handlOpenPageDropdownClick}
        >
          #
        </Button>
      )}
      {isOpenPageDropdown && (
        <Dropdown className={styles.tablePaginationDropdown}>
          <LabelInput
            control={
              <Input
                value={inputValue}
                placeholder="Введите номер"
                className={styles.fieldPaginationDropdown}
                onChange={handleChangeInputValue}
                onReset={handleResetInputValue}
                onKeyDown={handleChangeInputValueByKey}
                postfix={
                  <Button
                    nameIcon="xMedium"
                    theme={buttonThemeTypes.transparent}
                    className={styles.iconDelete}
                    onClick={handleResetInputValue}
                  />
                }
              />
            }
            label="Номер страницы"
          />
        </Dropdown>
      )}
    </div>
  );
};
