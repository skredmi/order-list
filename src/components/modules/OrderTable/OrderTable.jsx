import { Table } from "../../shared/Table/Table";
import { OrderTableHeader } from "../OrderTableHeader/OrderTableHeader";
import { OrderTableBody } from "../OrderTableBody/OrderTableBody";
import { OrderTableFooter } from "../OrderTableFooter/OrderTableFooter";

export const OrderTable = () => (
  <Table>
    <OrderTableHeader />
    <OrderTableBody />
    <OrderTableFooter />
  </Table>
);
