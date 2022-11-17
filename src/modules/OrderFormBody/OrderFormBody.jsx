import { useState } from "react";
import styles from "./OrderFormBody.module.css";
import { Button } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";
import { LabelInput } from "../../shared/LabelInput/LabelInput";
import {
  BUTTON_THEME as buttonThemeTypes,
  FILTER_STATUSES as statuses,
  STATUS_MAP as status,
} from "../../constants/constants";
import { Table } from "../../shared/Table/Table";
import { TableHeaderCell } from "../../shared/TableHeaderCell/TableHeaderCell";
import { TableHeader } from "../../shared/TableHeader/TableHeader";
import { TableRow } from "../../shared/TableRow/TableRow";
import { TableCell } from "../../shared/TableCell/TableCell";
import { TableFooter } from "../../shared/TableFooter/TableFooter";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { Radio } from "../../shared/Radio/Radio";
import { LabelControl } from "../../shared/LabelControl/LabelControl";

export const OrderFormBody = ({ selectedOrder }) => {
  const [isOpenStatusDropdown, setIsOpenDropdownStatus] = useState(false);

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenStatusDropdown);
  };
  return (
    <div className={styles.formBody}>
      <LabelInput
        label="Дата и время заказа"
        className={styles.formDateInput}
        control={<Input prefix={selectedOrder.date.slice(0, 10)} disabled />}
      />
      <LabelInput
        label="ФИО покупателя"
        control={
          <Input
            placeholder="ФИО покупателя"
            postfix={
              <Button
                nameIcon="xMedium"
                theme={buttonThemeTypes.transparent}
                className={styles.iconDelete}
              />
            }
          />
        }
      />
      <Table className={styles.formTable}>
        <TableHeader>
          <TableHeaderCell className={styles.formHeaderАrticle}>
            Артикул
          </TableHeaderCell>
          <TableHeaderCell className={styles.formHeaderName}>
            Наименование
          </TableHeaderCell>
          <TableHeaderCell className={styles.formHeaderPrice}>
            Цена
          </TableHeaderCell>
        </TableHeader>
        <TableRow className={styles.row}>
          <TableCell className={styles.rowАrticle}>rt.12024</TableCell>
          <TableCell className={styles.rowName}>Стил блейдс фо грасс</TableCell>
          <TableCell className={styles.rowPrice}>15 339 ₽</TableCell>
        </TableRow>
        <TableRow className={styles.row}>
          <TableCell className={styles.rowАrticle}>al.24600</TableCell>
          <TableCell className={styles.rowName}>
            Газонокосилка Apple Magic Grass Remover
          </TableCell>
          <TableCell className={styles.rowPrice}>82 664 ₽</TableCell>
        </TableRow>
        <TableFooter className={styles.formTableFooter}>
          Итоговая сумма: 98 003 ₽
        </TableFooter>
      </Table>
      <LabelInput
        className={styles.formLevelInput}
        label="Уровень лояльности"
        control={<Input prefix="Новичок" disabled />}
      />
      <LabelInput
        label="Статус заказа"
        control={
          <Input
            value={status[selectedOrder.status].status}
            onClick={handlOpenDropdownStatusClick}
            className={styles.formInputStatus}
            readOnly
            postfix={
              <Button
                nameIcon="vArrow"
                theme={buttonThemeTypes.transparent}
                className={styles.iconDelete}
                onClick={handlOpenDropdownStatusClick}
              />
            }
          />
        }
      />
      {isOpenStatusDropdown && (
        <Dropdown className={styles.formDropdown}>
          {Object.keys(statuses).map((key) => (
            <LabelControl
              key={key}
              control={
                <Radio
                  className={styles.formRadioDropdown}
                  value={key}
                  onChange
                />
              }
              label={statuses[key]}
            />
          ))}
        </Dropdown>
      )}
      <LabelInput
        label="Код подтверждения"
        control={
          <Input
            value="000"
            placeholder="Введите код"
            postfix={
              <Button
                nameIcon="xMedium"
                theme={buttonThemeTypes.transparent}
                className={styles.iconDelete}
              />
            }
          />
        }
      />
    </div>
  );
};
