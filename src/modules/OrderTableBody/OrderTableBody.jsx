import { mock } from "../../mock/mock";
import { OrderTableRow } from "../OrderTableRow/OrderTableRow";
import { TableBody } from "../../shared/TableBody/TableBody";

export const OrderTableBody = () => (
  <TableBody>
    {mock.map((item) => (
      <OrderTableRow key={item.id} item={item} />
    ))}
  </TableBody>
);
