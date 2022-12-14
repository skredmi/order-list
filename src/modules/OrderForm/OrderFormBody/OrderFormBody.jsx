import styles from "./OrderFormBody.module.css";
import { Button } from "../../../shared/Button/Button";
import { Input } from "../../../shared/Input/Input";
import { LabelInput } from "../../../shared/LabelInput/LabelInput";
import {
  BUTTON_THEME as buttonThemeTypes,
  FILTER_STATUSES as statuses,
  STATUS_MAP,
  INPUT_TYPES as inputTypes,
} from "../../../constants/constants";
import { Table } from "../../../shared/Table/Table";
import { TableHeaderCell } from "../../../shared/TableHeaderCell/TableHeaderCell";
import { TableHeader } from "../../../shared/TableHeader/TableHeader";
import { TableRow } from "../../../shared/TableRow/TableRow";
import { TableCell } from "../../../shared/TableCell/TableCell";
import { TableFooter } from "../../../shared/TableFooter/TableFooter";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import { Radio } from "../../../shared/Radio/Radio";
import { LabelControl } from "../../../shared/LabelControl/LabelControl";

export const OrderFormBody = ({
  isOpenStatusDropdown,
  date,
  customerName,
  status,
  code,
  handleResetValueNameInput,
  handleChangeValueNameInput,
  handlOpenDropdownStatusClick,
  handleChangeStatusOrder,
  handleChangeCodeValue,
  handleResetCodeValue,
  isValidName,
  isValidCode,
  isActiveError,
}) => (
  <div className={styles.formBody}>
    <LabelInput
      label="Дата и время заказа"
      className={styles.formDateInput}
      control={<Input prefix={date.slice(0, 10)} disabled />}
    />
    <LabelInput
      label="ФИО покупателя"
      control={
        <Input
          placeholder="ФИО покупателя"
          value={customerName}
          onChange={handleChangeValueNameInput}
          inputStyle={isValidName ? inputTypes.primary : inputTypes.incorrect}
          postfix={
            <Button
              nameIcon="xMedium"
              theme={buttonThemeTypes.transparent}
              className={styles.iconDelete}
              onClick={handleResetValueNameInput}
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
          value={STATUS_MAP[status].status}
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
    <div className={styles.formDropdownContainer}>
      {isOpenStatusDropdown && (
        <Dropdown className={styles.formDropdown}>
          {Object.keys(statuses).map((key) => (
            <LabelControl
              key={key}
              control={
                <Radio
                  className={styles.formRadioDropdown}
                  value={key}
                  onChange={() => handleChangeStatusOrder(key)}
                  checked={status === key}
                />
              }
              label={statuses[key]}
            />
          ))}
        </Dropdown>
      )}
    </div>
    <LabelInput
      label="Код подтверждения"
      control={
        <Input
          value={code}
          placeholder="Введите код"
          onChange={handleChangeCodeValue}
          inputStyle={
            !isActiveError || isValidCode
              ? inputTypes.primary
              : inputTypes.incorrect
          }
          postfix={
            <Button
              nameIcon="xMedium"
              theme={buttonThemeTypes.transparent}
              className={styles.iconDelete}
              onClick={handleResetCodeValue}
            />
          }
        />
      }
    />
  </div>
);
