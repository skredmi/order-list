import { useSelector } from "react-redux";
import { OrderTableRow } from "../OrderTableRow/OrderTableRow";
import { TableBody } from "../../shared/TableBody/TableBody";
import { getPaginetedOrders } from "../../store/slices/orders/ordersSelector";

export const OrderTableBody = () => {
  const orders = useSelector(getPaginetedOrders);

  return (
    <TableBody>
      {orders.map((item) => (
        <OrderTableRow key={item.id} item={item} />
      ))}
    </TableBody>
  );
};
