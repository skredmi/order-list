import { useEffect, useState } from "react";
import { mock } from "../../mock/mock";
import { OrderTableRow } from "../OrderTableRow/OrderTableRow";
import { TableBody } from "../../shared/TableBody/TableBody";

export const OrderTableBody = () => {
  const [showOrders, setShowOrders] = useState([]);

  useEffect(() => {
    setShowOrders(mock.slice(0, 20));
  }, []);

  return (
    <TableBody>
      {showOrders.map((item) => (
        <OrderTableRow key={item.id} item={item} />
      ))}
    </TableBody>
  );
};
