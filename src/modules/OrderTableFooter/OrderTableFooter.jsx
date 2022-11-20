import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./OrderTableFooter.module.css";
import { TableFooter } from "../../shared/TableFooter/TableFooter";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { LabelControl } from "../../shared/LabelControl/LabelControl";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import { Radio } from "../../shared/Radio/Radio";
import { OrderTablePagination } from "../OrderTablePagination/OrderTablePagination";
import { getSelectedOrders } from "../../store/slices/filters/filterSelector";
import { removeOrder, changeOrder } from "../../store/slices/orders/orderSlice";
import { resetSelectedOrders } from "../../store/slices/filters/filterSlice";
import {
  FILTER_STATUSES as statuses,
  BUTTON_THEME as buttonThemeTypes,
  BUTTON_SIZE as buttonSizeTypes,
} from "../../constants/constants";

export const OrderTableFooter = () => {
  const dispatch = useDispatch();

  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);
  const [isOpenDeleteDropdown, setIsOpenDeleteDropdow] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  const handlOpenDeleteDropdownClick = () => {
    setIsOpenDeleteDropdow(!isOpenDeleteDropdown);
  };

  const selectedOrders = useSelector(getSelectedOrders);

  const handleRemoveSelectedOrderClick = () => {
    dispatch(removeOrder({ ids: selectedOrders }));
    dispatch(resetSelectedOrders());
    setIsOpenDeleteDropdow(!isOpenDeleteDropdown);
  };

  const handleChangeOrderStatus = (status) => {
    selectedOrders.forEach((id) => {
      dispatch(changeOrder({ id, key: "status", value: status }));
    });
    dispatch(resetSelectedOrders());
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  const selectedOrderText = (number) => {
    if (number >= 5) {
      return "записей";
    }
    if (number > 1 && number < 5) {
      return "записи";
    }
    return "запись";
  };

  return (
    <TableFooter className={styles.tableFooter}>
      <div className={styles.tableFooterItems}>
        {selectedOrders.length > 0 && (
          <>
            <div>Выбрано записей: {selectedOrders.length}</div>
            <Button
              theme={buttonThemeTypes.primary}
              nameIcon="pencil"
              size={buttonSizeTypes.small}
              className={styles.tableFooterButton}
              onClick={handlOpenDropdownStatusClick}
            >
              Изменить статус
            </Button>
            <Button
              theme={buttonThemeTypes.warning}
              nameIcon="bin"
              size={buttonSizeTypes.small}
              className={styles.tableFooterButtonDelete}
              onClick={handlOpenDeleteDropdownClick}
            >
              Удалить
            </Button>
          </>
        )}
        {isOpenDropdownStatus && (
          <Dropdown className={styles.tableFooterDropdown}>
            {Object.keys(statuses).map((key) => (
              <LabelControl
                key={key}
                control={
                  <Radio
                    className={styles.radioDropdown}
                    value={key}
                    onChange={() => handleChangeOrderStatus(key)}
                  />
                }
                label={statuses[key]}
              />
            ))}
          </Dropdown>
        )}
        {isOpenDeleteDropdown && (
          <Dropdown className={styles.tableFooterDeleteDropdown}>
            <LabelInput
              control={
                <>
                  <Button
                    theme={buttonThemeTypes.transparent}
                    size={buttonSizeTypes.small}
                    isFullWidth
                    onClick={handleRemoveSelectedOrderClick}
                  >
                    Удалить
                  </Button>
                  <Button
                    theme={buttonThemeTypes.primary}
                    size={buttonSizeTypes.small}
                    isFullWidth
                    onClick={handlOpenDeleteDropdownClick}
                  >
                    Отмена
                  </Button>
                </>
              }
              label={`Удалить ${selectedOrders.length} ${selectedOrderText(
                selectedOrders.length
              )}?`}
            />
          </Dropdown>
        )}
      </div>

      <OrderTablePagination />
    </TableFooter>
  );
};
