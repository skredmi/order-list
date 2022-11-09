import { useSelector } from "react-redux";
import { OrderTableRow } from "../OrderTableRow/OrderTableRow";
import { TableBody } from "../../shared/TableBody/TableBody";
import {
  getFilteredOrders,
  getOrdersData,
} from "../../store/slices/orders/ordersSelector";

export const OrderTableBody = () => {
  const orders = useSelector(getOrdersData);
  const filteredOrders = getFilteredOrders(orders);

  return (
    <TableBody>
      {filteredOrders.map((item) => (
        <OrderTableRow key={item.id} item={item} />
      ))}
    </TableBody>
  );
};
