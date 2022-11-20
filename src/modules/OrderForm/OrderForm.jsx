import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./OrderForm.module.css";
import { OrderFormHeader } from "../OrderFormHeader/OrderFormHeader";
import { resetSelectedOrders } from "../../store/slices/filters/filterSlice";
import { OrderFormBody } from "../OrderFormBody/OrderFormBody";
import { OrderFormFooter } from "../OrderFormFooter/OrderFormFooter";
import { changeOrder } from "../../store/slices/orders/orderSlice";
import { getSelectedOrders } from "../../store/slices/filters/filterSelector";
import { CODE_FORM as correctCode } from "../../constants/constants";

export const OrderForm = ({ setIsOpenForm }) => {
  const dispatch = useDispatch();

  const selectedOrder = useSelector(getSelectedOrders)[0];

  const [customerName, setCustomerName] = useState(selectedOrder.name);
  const [status, setStatus] = useState(selectedOrder.status);
  const [isOpenStatusDropdown, setIsOpenDropdownStatus] = useState(false);
  const [code, setCode] = useState("");
  const [isActiveError, setIsActiveError] = useState(false);

  const { date, numberOrder } = selectedOrder;

  const handleCloseOrderForm = () => {
    setIsOpenForm(false);
    dispatch(resetSelectedOrders());
  };

  const handleChangeValueNameInput = (event) => {
    setCustomerName(event.target.value);
  };

  const handleResetValueNameInput = () => {
    setCustomerName("");
  };

  const handlOpenDropdownStatusClick = () => {
    setIsOpenDropdownStatus(!isOpenStatusDropdown);
  };

  const handleChangeStatusOrder = (value) => {
    setStatus(value);
    setIsOpenDropdownStatus(!isOpenStatusDropdown);
  };

  const handleChangeCodeValue = (event) => {
    setCode(event.target.value);
  };

  const handleResetCodeValue = () => {
    setCode("");
  };

  const isValidCode = code === correctCode;
  const isEmptyCode = code === "";
  const isValidName = customerName.length > 0;
  let errorMessage = "";

  if (!isValidName && !isValidCode && isEmptyCode) {
    errorMessage =
      "Проверьте правильность заполнения полей ФИО покупателя и код подтверждения";
  } else if (!isValidCode || isEmptyCode) {
    errorMessage = "Необходимо указать правильный код подтверждения";
  } else if (!isValidName) {
    errorMessage = "Необходимо заполнить поле ФИО покупателя";
  }

  const isChanged =
    customerName !== selectedOrder.name || status !== selectedOrder.status;

  const handleSubmitForm = () => {
    if (isValidName && isValidCode) {
      dispatch(
        changeOrder({ id: selectedOrder.id, key: "name", value: customerName })
      );
      dispatch(
        changeOrder({ id: selectedOrder.id, key: "status", value: status })
      );
      setIsOpenForm(false);
      dispatch(resetSelectedOrders());
    } else {
      setIsActiveError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <OrderFormHeader
          onCloseForm={handleCloseOrderForm}
          numberOrder={numberOrder}
          isChanged={isChanged}
        />
        <OrderFormBody
          isOpenStatusDropdown={isOpenStatusDropdown}
          date={date}
          customerName={customerName}
          status={status}
          code={code}
          handleResetValueNameInput={handleResetValueNameInput}
          handleChangeValueNameInput={handleChangeValueNameInput}
          handlOpenDropdownStatusClick={handlOpenDropdownStatusClick}
          handleChangeStatusOrder={handleChangeStatusOrder}
          handleChangeCodeValue={handleChangeCodeValue}
          handleResetCodeValue={handleResetCodeValue}
          isValidName={isValidName}
          isValidCode={isValidCode}
          isActiveError={isActiveError}
        />
        <OrderFormFooter
          handleSubmitForm={handleSubmitForm}
          errorMessage={errorMessage}
          isActiveError={isActiveError}
        />
      </div>
    </div>
  );
};
