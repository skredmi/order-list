import { useState } from "react";
import styles from "./TableFooter.module.css";
import { Button } from "../../../../shared/Button/Button";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { LabelControl } from "../../../../shared/LabelControl/LabelControl";
import { LabelInput } from "../../../../shared/LabelInput/LabelInput";
import { Radio } from "../../../../shared/Radio/Radio";
import { Input } from "../../../../shared/Input/Input";

export const TableFooter = () => {
  const [isOpenDropdownStatus, setIsOpenDropdownStatus] = useState(false);
  const [isOpenDeleteDropdown, setIsOpenDeleteDropdow] = useState(false);
  const [isOpenPageDropdown, setIsOpenPageDropdown] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenDropdownStatus);
  };

  const handlOpenDeleteDropdownClick = () => {
    setIsOpenDeleteDropdow(!isOpenDeleteDropdown);
  };

  const handlOpenPageDropdownClick = () => {
    setIsOpenPageDropdown(!isOpenPageDropdown);
  };

  return (
    <section className={styles.tableFooter}>
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
      <div className={styles.tableFooterPages}>
        <Button theme="primary" size="small">
          1
        </Button>
        <Button theme="transparent" size="small">
          2
        </Button>
        <Button theme="transparent" size="small">
          3
        </Button>
        <div>...</div>
        <Button theme="transparent" size="small">
          18
        </Button>
        <Button
          theme="transparent"
          size="small"
          onClick={handlOpenPageDropdownClick}
        >
          #
        </Button>
        {isOpenPageDropdown && (
          <Dropdown className={styles.tableFooterPageDropdown}>
            <LabelInput
              control={
                <Input
                  placeholder="Введите номер"
                  className={styles.fieldPageDropdown}
                />
              }
              label="Номер страницы"
            />
          </Dropdown>
        )}
      </div>
    </section>
  );
};
