import { useState } from "react";
import styles from "./OrderTableFooter.module.css";
import { TableFooter } from "../../shared/TableFooter/TableFooter";
import { Button } from "../../shared/Button/Button";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { LabelControl } from "../../shared/LabelControl/LabelControl";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import { Radio } from "../../shared/Radio/Radio";
import { OrderTablePagination } from "../OrderTablePagination/OrderTablePagination";

export const OrderTableFooter = () => {
  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);
  const [isOpenDeleteDropdown, setIsOpenDeleteDropdow] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  const handlOpenDeleteDropdownClick = () => {
    setIsOpenDeleteDropdow(!isOpenDeleteDropdown);
  };

  return (
    <TableFooter>
      <div className={styles.tableFooterItems}>
        <div>Выбрано записей: 5</div>
        <Button
          theme="primary"
          nameIcon="pencil"
          size="small"
          className={styles.tableFooterButton}
          onClick={handlOpenDropdownStatusClick}
        >
          Изменить статус
        </Button>
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
        <Button
          theme="warning"
          nameIcon="bin"
          size="small"
          className={styles.tableFooterButtonDelete}
          onClick={handlOpenDeleteDropdownClick}
        >
          Удалить
        </Button>
        {isOpenDeleteDropdown && (
          <Dropdown className={styles.tableFooterDeleteDropdown}>
            <LabelInput
              control={
                <>
                  <Button theme="transparent" size="small" isFullWidth>
                    Удалить
                  </Button>
                  <Button theme="primary" size="small" isFullWidth>
                    Отмена
                  </Button>
                </>
              }
              label="Удалить n записей?"
            />
          </Dropdown>
        )}
      </div>
      <OrderTablePagination />
    </TableFooter>
  );
};
