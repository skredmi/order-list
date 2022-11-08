/* import { useEffect, useState } from "react"; */
/* import { mock } from "../../mock/mock"; */
import { useSelector } from "react-redux";
import { OrderTableRow } from "../OrderTableRow/OrderTableRow";
import { TableBody } from "../../shared/TableBody/TableBody";
import { getOrdersData } from "../../store/slices/orders/ordersSelector";

export const OrderTableBody = () => {
  /*   const [showOrders, setShowOrders] = useState([]);

  useEffect(() => {
    setShowOrders(mock.slice(0, 20));
  }, []); */

  const orders = useSelector(getOrdersData);

  return (
    <TableBody>
      {orders.map((item) => (
        <OrderTableRow key={item.id} item={item} />
      ))}
    </TableBody>
  );
};
