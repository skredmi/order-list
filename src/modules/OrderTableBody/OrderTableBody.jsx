import { useSelector, useDispatch } from "react-redux";
import { OrderTableRow } from "../OrderTableRow/OrderTableRow";
import { TableBody } from "../../shared/TableBody/TableBody";
import { getPaginetedOrders } from "../../store/slices/orders/ordersSelector";
import { getSelectedOrders } from "../../store/slices/filters/filterSelector";
import {
  deselectOrder,
  selectOrder,
} from "../../store/slices/filters/filterSlice";

export const OrderTableBody = () => {
  const dispatch = useDispatch();

  const orders = useSelector(getPaginetedOrders);
  const selectedOrders = useSelector(getSelectedOrders);

  const handleChangeSelectedOrder = (e, id) => {
    dispatch(
      selectedOrders.includes(id) ? deselectOrder({ id }) : selectOrder({ id })
    );
  };

  return (
    <TableBody>
      {orders.map((item) => (
        <OrderTableRow
          key={item.id}
          item={item}
          onChange={(e) => handleChangeSelectedOrder(e, item.id)}
          checked={selectedOrders.includes(item.id)}
        />
      ))}
    </TableBody>
  );
};
