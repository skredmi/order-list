import { useDispatch, useSelector } from "react-redux";
import styles from "./OrderForm.module.css";
import { OrderFormHeader } from "../OrderFormHeader/OrderFormHeader";
import { resetSelectedOrders } from "../../store/slices/filters/filterSlice";
import { getSelectedIdOrders } from "../../store/slices/orders/ordersSelector";
import { OrderFormBody } from "../OrderFormBody/OrderFormBody";
import { OrderFormFooter } from "../OrderFormFooter/OrderFormFooter";

export const OrderForm = ({ setIsOpenForm }) => {
  const dispatch = useDispatch();

  const selectedOrder = useSelector(getSelectedIdOrders)[0];

  const handleCloseOrderForm = () => {
    setIsOpenForm(false);
    dispatch(resetSelectedOrders());
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <OrderFormHeader
          onCloseForm={handleCloseOrderForm}
          selectedOrder={selectedOrder}
        />
        <OrderFormBody selectedOrder={selectedOrder} />
        <OrderFormFooter />
      </div>
    </div>
  );
};
