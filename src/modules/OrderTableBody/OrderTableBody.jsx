import { useSelector, useDispatch } from "react-redux";
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

export const OrderTableBody = ({ state }) => {
  const dispatch = useDispatch();

  const [isOpenForm, setIsOpenForm] = state;
  const orders = useSelector(getPaginetedOrders);
  const selectedOrders = useSelector(getSelectedOrders);

  const handleChangeSelectedOrder = (event, id) => {
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
          onChange={(event) => handleChangeSelectedOrder(event, item.id)}
          checked={selectedOrders.includes(item.id)}
          onClick={(e) => handleOpenFormClick(e, item)}
        />
      ))}
      {isOpenForm && <OrderForm setIsOpenForm={setIsOpenForm} />}
    </TableBody>
  );
};
