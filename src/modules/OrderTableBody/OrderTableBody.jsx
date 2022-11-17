import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { OrderTableRow } from "../OrderTableRow/OrderTableRow";
import { TableBody } from "../../shared/TableBody/TableBody";
import { OrderForm } from "../OrderForm/OrderForm";
import { getPaginetedOrders } from "../../store/slices/orders/ordersSelector";
import { getSelectedOrders } from "../../store/slices/filters/filterSelector";
import {
  deselectOrder,
  selectOrder,
  resetSelectedOrders,
} from "../../store/slices/filters/filterSlice";

export const OrderTableBody = () => {
  const dispatch = useDispatch();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const orders = useSelector(getPaginetedOrders);
  const selectedOrders = useSelector(getSelectedOrders);

  const handleChangeSelectedOrder = (e, id) => {
    dispatch(
      selectedOrders.includes(id) ? deselectOrder({ id }) : selectOrder({ id })
    );
  };

  const handleOpenFormClick = (event, id) => {
    if (event.target.tagName === "DIV") {
      dispatch(resetSelectedOrders());
      dispatch(selectOrder({ id }));
      setIsOpenForm(true);
    }
  };

  return (
    <TableBody>
      {orders.map((item) => (
        <OrderTableRow
          key={item.id}
          item={item}
          onChange={(e) => handleChangeSelectedOrder(e, item.id)}
          checked={selectedOrders.includes(item.id)}
          onClick={(e) => handleOpenFormClick(e, item.id)}
        />
      ))}
      {isOpenForm && <OrderForm setIsOpenForm={setIsOpenForm} />}
    </TableBody>
  );
};
