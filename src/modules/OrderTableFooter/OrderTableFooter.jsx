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
import { removeOrder } from "../../store/slices/orders/orderSlice";
import { resetSelectedOrders } from "../../store/slices/filters/filterSlice";

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
    for (const id of selectedOrders) {
      dispatch(removeOrder({ id }));
    }
    dispatch(resetSelectedOrders());
    setIsOpenDeleteDropdow(!isOpenDeleteDropdown);
  };

  return (
    <TableFooter>
      <div className={styles.tableFooterItems}>
        <div>Выбрано записей: {selectedOrders.length}</div>
        {selectedOrders.length > 0 && (
          <>
            <Button
              theme="primary"
              nameIcon="pencil"
              size="small"
              className={styles.tableFooterButton}
              onClick={handlOpenDropdownStatusClick}
            >
              Изменить статус
            </Button>
            <Button
              theme="warning"
              nameIcon="bin"
              size="small"
              className={styles.tableFooterButtonDelete}
              onClick={handlOpenDeleteDropdownClick}
            >
              Удалить
            </Button>
          </>
        )}
        {isOpenDropdownStatus && (
          <Dropdown className={styles.tableFooterDropdown}>
            <LabelControl
              control={<Radio className={styles.radioDropdown} />}
              label="Новый"
            />
            <LabelControl
              control={<Radio className={styles.radioDropdown} />}
              label="Рассчет"
            />
            <LabelControl
              control={<Radio className={styles.radioDropdown} />}
              label="Подтвержден"
            />
            <LabelControl
              control={<Radio className={styles.radioDropdown} />}
              label="Отложен"
            />
            <LabelControl
              control={<Radio className={styles.radioDropdown} />}
              label="Выполнен"
            />
            <LabelControl
              control={<Radio className={styles.radioDropdown} />}
              label="Отменен"
            />
          </Dropdown>
        )}
        {isOpenDeleteDropdown && (
          <Dropdown className={styles.tableFooterDeleteDropdown}>
            <LabelInput
              control={
                <>
                  <Button
                    theme="transparent"
                    size="small"
                    isFullWidth
                    onClick={handleRemoveSelectedOrderClick}
                  >
                    Удалить
                  </Button>
                  <Button theme="primary" size="small" isFullWidth>
                    Отмена
                  </Button>
                </>
              }
              label={`Удалить ${selectedOrders.length} записей?`}
            />
          </Dropdown>
        )}
      </div>

      <OrderTablePagination />
    </TableFooter>
  );
};
